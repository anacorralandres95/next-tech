import React from "react";
import BrandsFilter from "../components/brands-filter/BrandsFilter";
import ProductCard from "../components/product-card/ProductCard";
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

      <BrandsFilter
        brands={brands}
        selectedModels={selectedModels}
        setSelectedModels={setSelectedModels}
        clearSelectedBrands={clearSelectedBrands}
        clearSearchValue={clearSearchValue}
      />

      <div className="product-card-container">
        {orderedData?.map((product) => {
          if (getIsVisibleProducts(product))
            return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
