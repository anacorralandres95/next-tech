import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProducts = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [selectedModels, setSelectedModels] = useState([]);

  const products = useSelector((state) => state.productsModel.products);

  useEffect(() => {
    dispatch.productsModel.getProductsInfo();
  }, []);

  const brands = products
    ?.map((p) => p.price && p.model.split(" ")[0])
    .filter(function (item, pos, a) {
      return item && a.indexOf(item) == pos;
    });

  const getIsVisibleProducts = (product) => {
    if (product.price) {
      if (!searchValue && selectedModels.length === 0) return true;

      if (
        searchValue &&
        (product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.model.toLowerCase().includes(searchValue.toLowerCase())) &&
        product.price
      )
        return true;

      if (
        selectedModels.length > 0 &&
        selectedModels.includes(product.model.split(" ")[0])
      )
        return true;
    }
  };

  return {
    products,
    searchValue,
    brands,
    selectedModels,
    setSearchValue,
    setSelectedModels,
    getIsVisibleProducts,
  };
};
