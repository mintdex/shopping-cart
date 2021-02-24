import React from "react";
import { NavLink, Link } from "react-router-dom";
import cartIcon from "../262611.svg";

const Nav = (props) => {
  const { numItems } = props;

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li><NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "lightblue"
          }}
          exact to="/"
        >Home</NavLink>
        </li>


        <li><NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "lightblue"
          }}
          to="/shop"
        >Shop</NavLink></li>

        
        <li>  
          <Link to="/checkout"> 
            <div id="cart">
              <img src={cartIcon} alt="cart" />
              <p id="numItems">{numItems}</p>
            </div>
          </Link>
        </li>
        
      </ul>
    </nav>
  )
};

export default Nav