import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProducts = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const products = useSelector((state) => state.productsModel.products);

  useEffect(() => {
    dispatch.productsModel.getProductsInfo();
  }, []);

  return { products, searchValue, setSearchValue };
};
