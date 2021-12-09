import React from "react";
import cart from "../../../../assets/icons/cart.png";

const NavBar = () => {
  // TODO: Replace with counter API response
  const counter = 1;

  return (
    <div className="nav-bar">
      <div className="products">
        <a href="/">Productos</a>
        <div className="bar"></div>
      </div>
      <div>
        <a href="/">
          <span className="logo-1">Next</span>
          <span className="logo-2">Tech</span>
        </a>
      </div>
      <div className="cart">
        <img src={cart} className="cart-icon" />
        <div className="counter">
          <small>{counter}</small>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
