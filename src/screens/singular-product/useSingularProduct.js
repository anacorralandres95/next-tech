import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useSingularProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsModel.singularProduct);

  const [color, setColor] = useState();
  const [storage, setStorage] = useState();

  useEffect(() => {
    productId &&
      dispatch.productsModel.getSingularProduct({
        productId,
      });
  }, [productId]);

  useEffect(() => {
    if (product) {
      setColor(product?.options?.colors[0].code);
      setStorage(product?.options?.storages[0].code);
    }
  }, [product]);

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

  const onChangeColor = (e) => setColor(e.target.value);

  const onChangeStorage = (e) => setStorage(e.target.value);

  const addCart = () => {
    dispatch.productsModel.addProduct({
      productId: product.id,
      colorCode: color,
      storageCode: storage,
    });
  };

  return {
    product,
    onChangeColor,
    onChangeStorage,
    addCart,
  };
};
