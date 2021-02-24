import React, { useState, useEffect } from "react";
import Item from "./Item.js";

const Shop = (props) => {
  const { addItem } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) fetchItems();

    return () => {
      isMounted = false;
    }
  }, []);
  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
    const items = (await data.json()).data.slice(0, 10);
    setItems(items);
  };

  return (
    <div className="shop-container">
      <div className="items">
        {items.map(item => (
          <Item key={item.itemId} itemId={item.itemId} itemName={item.item.name} icon={item.item.images.icon} onSubmitHandler={addItem} />
        )
        )}
      </div>
    </div>
  );
};

export default Shop

