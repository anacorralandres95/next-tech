import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsModel.products);

  useEffect(() => {
    dispatch.productsModel.getProductsInfo();
  }, []);

  return { products };
};
