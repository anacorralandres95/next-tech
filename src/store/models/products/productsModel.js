import { createModel } from "@rematch/core";
import ProductsService from "../../../services/ProductsService";

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
  },
  effects: (dispatch) => ({
    async getProductsInfo(_, rootState) {
      try {
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
  }),
});
