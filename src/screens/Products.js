import React from "react";
import { useProducts } from "./useProducts";

const Products = () => {
  const { products, searchValue, setSearchValue } = useProducts();

  const onChangeSearchValue = (e) => setSearchValue(e.target.value);

  if (!products) <></>;

  return (
    <>
      <input
        type="text"
        onChange={onChangeSearchValue}
        placeholder="Buscar..."
        className="search"
      />

      {products?.map((product, i) => {
        if (
          product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.model.toLowerCase().includes(searchValue.toLowerCase())
        )
          return (
            <div key={i}>
              <p>{product.brand}</p>
              <p>{product.model}</p>
            </div>
          );
      })}
    </>
  );
};

export default Products;
