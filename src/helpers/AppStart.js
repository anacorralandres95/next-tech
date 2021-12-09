import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

const AppStart = ({ children }) => {
  const dispatch = useDispatch();
  const dataLoadedAt = useSelector((state) => state.productsModel.dataLoadedAt);

  useEffect(() => {
    dispatch.productsModel.setDataLoadedAt({
      date: dayjs().hour(),
    });

    if (dayjs().hour() - dataLoadedAt > 0) {
      // TODO: Hacer lo mismo con los demás modelos
      dispatch.productsModel.setProducts({ setProducts: undefined });
    }
  }, [dataLoadedAt]);

  return <>{children}</>;
};

export default AppStart;
