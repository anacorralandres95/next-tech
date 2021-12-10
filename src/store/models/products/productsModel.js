import { createModel } from "@rematch/core";
import ProductsService from "../../../services/ProductsService";
import dayjs from "dayjs";

export const productsModel = createModel()({
  state: {
    dataLoadedAt: undefined,
    products: undefined,
    singularProduct: undefined,
    counter: undefined,
  },
  reducers: {
    setDataLoadedAt: (state, { date }) => {
      state.dataLoadedAt = date;
      return state;
    },
    setProducts: (state, { products }) => {
      state.products = products;
      return state;
    },
    setSingularProduct: (state, { product }) => {
      state.singularProduct = product;
      return state;
    },
    setCounter: (state, { counter }) => {
      state.counter = counter;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getProductsInfo(_, rootState) {
      try {
        if (!rootState.productsModel.dataLoadedAt) {
          dispatch.productsModel.setDataLoadedAt({
            date: dayjs().hour(),
          });
        }

        if (!rootState.productsModel.products) {
          const products = await ProductsService.getProducts();
          dispatch.productsModel.setProducts({ products });
        }
      } catch (err) {
        return err;
      }
    },
    async getSingularProduct({ productId }) {
      try {
        const product = await ProductsService.getProductById({ productId });
        dispatch.productsModel.setSingularProduct({ product });
      } catch (err) {
        return err;
      }
    },
    async addProduct({ productId, colorCode, storageCode }) {
      try {
        const counter = await ProductsService.addProduct({
          productId,
          colorCode,
          storageCode,
        });

        dispatch.productsModel.setCounter({ counter });
      } catch (err) {
        return err;
      }
    },
  }),
});
