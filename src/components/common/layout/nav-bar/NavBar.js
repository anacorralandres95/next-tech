import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cart from "../../../../assets/icons/cart.png";
import home from "../../../../assets/icons/home.png";

const NavBar = () => {
  const { singularProduct, counter } = useSelector(
    (state) => state.productsModel
  );

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setWidth = () => {
      const { innerWidth: width } = window;
      setScreenWidth(width);
    };

    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div className="nav-bar">
      {screenWidth > 900 ? (
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
      ) : (
        <a href="/" className="products">
          <img src={home} className="nav-icon" />
        </a>
      )}
      <div>
        <a href="/">
          <span className="logo-1">Next</span>
          <span className="logo-2">Tech</span>
        </a>
      </div>
      <div className="cart">
        <img src={cart} className="nav-icon" />
        <div className="counter">
          <small>{counter ?? 0}</small>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
