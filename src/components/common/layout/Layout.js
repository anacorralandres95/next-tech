import React from "react";
import Footer from "./footer/Footer";
import NavBar from "./nav-bar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
