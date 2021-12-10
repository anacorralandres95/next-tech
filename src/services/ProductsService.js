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
  addProduct: async ({ productId, colorCode, storageCode }) => {
    const response = await Api.post("/cart", {
      id: productId,
      colorCode,
      storageCode,
    });

    return response.data.count;
  },
};

export default ProductsService;
