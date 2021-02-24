import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

function App() {

  const [cart, setCart] = useState({});

  const addItem = (event, itemId, itemName, icon, quantiy) => {
    event.preventDefault();

    if (quantiy <= 0) return; 
    setCart({
      ...cart,
      [itemId]: {
        "name": itemName,
        "img": icon,
        "quantity": (cart[itemId]?.quantity  || 0) + parseInt(quantiy),
      },
    });
  };

  const getNumCartItems = () => {
    let total = 0;

    for (let itemId in cart) {
      total += cart[itemId].quantity;
    }
    console.log(cart);
    return total;
  }

  return (
    <Router>
      <div className="App">
        <Nav numItems={getNumCartItems()}/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" render={() => <Shop  addItem={addItem}/>} />
            <Route path="/checkout" render={() => <Checkout shoppingCart={cart} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
