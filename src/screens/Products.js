import React from "react";
import { useProducts } from "./useProducts";

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <p style={{ width: "500px", height: "2000px" }}>Products</p>
    </>
  );
};

export default Products;
