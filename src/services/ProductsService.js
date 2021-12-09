import Api from "./_clients/Api";

const ProductsService = {
  getProducts: async () => {
    const response = await Api.get("/product");

    return response.data;
  },
};

export default ProductsService;
