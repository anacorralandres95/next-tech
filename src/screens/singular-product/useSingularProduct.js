import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useSingularProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsModel.singularProduct);

  useEffect(() => {
    productId &&
      dispatch.productsModel.getSingularProduct({
        productId,
      });
  }, [productId]);

  useEffect(() => {
    const dispatchProduct = () =>
      dispatch.productsModel.setSingularProduct({
        product: undefined,
      });

    window.addEventListener("beforeunload", dispatchProduct);

    return () => {
      window.removeEventListener("beforeunload", dispatchProduct);
    };
  }, []);

  return {
    product,
  };
};
