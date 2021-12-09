import React from "react";
import { useProducts } from "./useProducts";

const Products = () => {
  const {
    products,
    searchValue,
    brands,
    selectedModels,
    setSearchValue,
    setSelectedModels,
    getIsVisibleProducts,
  } = useProducts();

  const onChangeSearchValue = (e) => {
    clearSelectedBrands();
    setSearchValue(e.target.value);
  };

  const clearSearchValue = () => setSearchValue("");

  const clearSelectedBrands = () => setSelectedModels([]);

  if (!products) <></>;

  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder="Buscar..."
        className="search"
      />

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

      {products?.map((product, i) => {
        if (getIsVisibleProducts(product))
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
