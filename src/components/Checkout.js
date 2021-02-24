import React from "react";

function Checkout(props) {
  const { shoppingCart } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Image</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(shoppingCart).map(([id, itemInfo]) => 
            <tr>
              <td>{itemInfo.name}</td>
              <td className="checkout-img"><img src={itemInfo.img} alt="product"></img></td>
              <td>{itemInfo.quantity}</td>
            </tr>
          )}
        </tbody>
      </table>
      <center><button type="button" className="checkout-btn">Checkout</button></center>
    </div>
  );
}

export default Checkout