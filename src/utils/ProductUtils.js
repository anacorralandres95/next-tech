const ProductsUtils = {
  getOrderedProducts(products, order) {
    if (order === "asc") {
      return products
        .slice()
        .sort((a, b) =>
          parseInt(a.price) < parseInt(b.price)
            ? -1
            : parseInt(a.price) > parseInt(b.price)
            ? 1
            : 0
        );
    }

    if (order === "des") {
      return products
        .slice()
        .sort((a, b) =>
          parseInt(a.price) > parseInt(b.price)
            ? -1
            : parseInt(a.price) < parseInt(b.price)
            ? 1
            : 0
        );
    } else {
      return products;
    }
  },
};

export default ProductsUtils;
