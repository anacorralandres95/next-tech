import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

const AppStart = ({ children }) => {
  const dispatch = useDispatch();
  const dataLoadedAt = useSelector((state) => state.productsModel.dataLoadedAt);

  useEffect(() => {
    if (dayjs().hour() - dataLoadedAt > 0) {
      dispatch.productsModel.setDataLoadedAt({ date: undefined });
      dispatch.productsModel.setProducts({ setProducts: undefined });
      dispatch.productsModel.setCounter({ counter: undefined });
    }
  }, [dataLoadedAt]);

  return <>{children}</>;
};

export default AppStart;
