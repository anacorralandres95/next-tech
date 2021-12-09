import React from "react";
import ProductsUtils from "../utils/ProductUtils";
import { useProducts } from "./useProducts";

const Products = () => {
  const {
    products,
    searchValue,
    brands,
    selectedModels,
    order,
    setSearchValue,
    setSelectedModels,
    getIsVisibleProducts,
    setOrder,
  } = useProducts();

  const onChangeSearchValue = (e) => {
    clearSelectedBrands();
    setSearchValue(e.target.value);
  };

  const onChangeOrder = (e) => setOrder(e.target.value);

  const clearSearchValue = () => setSearchValue("");

  const clearSelectedBrands = () => setSelectedModels([]);

  if (!products) <></>;

  const orderedData = ProductsUtils.getOrderedProducts(products, order);

  return (
    <>
      <div className="filters">
        <input
          type="text"
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Buscar..."
          className="search"
        />

        <small className="small">Ordenar</small>
        <select onChange={onChangeOrder}>
          <option value="">Por defecto</option>
          <option value="asc">Precio ascendente</option>
          <option value="des">Precio descendente</option>
        </select>
      </div>

      <div className="brands-container">
        <small className="small">Filtra por modelos</small>

        <div
          className={`brand ${selectedModels.length === 0 && "brand-selected"}`}
          onClick={clearSelectedBrands}
        >
          <small>Todos</small>
        </div>

        {brands?.map((brand, i) => {
          const onSelectBrand = () => {
            clearSearchValue();
            if (selectedModels.includes(brand)) {
              setSelectedModels(selectedModels.filter((s) => s !== brand));
            } else {
              setSelectedModels(selectedModels.concat(brand));
            }
          };

          const isSelected = selectedModels.includes(brand);

          return (
            <div
              key={i}
              className={`brand ${isSelected && "brand-selected"}`}
              onClick={onSelectBrand}
            >
              <small>{brand}</small>
            </div>
          );
        })}
      </div>

      {orderedData?.map((product, i) => {
        if (getIsVisibleProducts(product))
          return (
            <div key={i}>
              <p>{product.brand}</p>
              <p>{product.model}</p>
              <p>{product.price}</p>
            </div>
          );
      })}
    </>
  );
};

export default Products;
