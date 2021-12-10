import React from "react";
import { useSelector } from "react-redux";
import cart from "../../../../assets/icons/cart.png";

const NavBar = () => {
  const { singularProduct, counter } = useSelector(
    (state) => state.productsModel
  );

  return (
    <div className="nav-bar">
      <div className="products">
        <a href="/">Productos</a>
        {!singularProduct && <div className="bar" />}
        {singularProduct && (
          <>
            <p className="divider">·</p>
            <p>{singularProduct.model}</p>
          </>
        )}
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
          <small>{counter ?? 0}</small>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
