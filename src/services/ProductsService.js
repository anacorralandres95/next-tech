import Api from "./_clients/Api";

const ProductsService = {
  getProducts: async () => {
    const response = await Api.get("/product");

    return response.data;
  },
  getProductById: async ({ productId }) => {
    const response = await Api.get(`/product/${productId}`);

    return response.data;
  },
};

export default ProductsService;
