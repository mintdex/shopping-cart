import React, { useState } from "react";

const Item = (props) => {
  
  const { itemId, itemName, icon, onSubmitHandler } = props;
 
  const [quantiy, setQuantiy] = useState(0);
  
  const plusQuantity = (event) => {
    const value = event.target.value;
    setQuantiy(value);
  };

  return (
    <div className="item">
      <div>
        <img src={icon} alt="item" />
      </div>
      <div>
        <center>
          <h2>{itemName}</h2>
        </center>
        <div className="item-footer">
          <form onSubmit={(event) => { onSubmitHandler(event, itemId, itemName, icon, quantiy); }}>
            <input type="number" min="1" onChange={plusQuantity} />
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item