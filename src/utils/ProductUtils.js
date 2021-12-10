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
  getProductTechnicDetails(product) {
    const details = [
      {
        title: "CPU",
        value: product.cpu,
      },
      {
        title: "RAM",
        value: product.ram,
      },
      {
        title: "Sistema operativo",
        value: product.os,
      },
      {
        title: "Tipo de pantalla",
        value: product.displayType,
      },
      {
        title: "Resolución de pantalla",
        value: product.displayResolution,
      },
      {
        title: "Tamaño de pantalla",
        value: product.displaySize,
      },
      {
        title: "Dimensiones",
        value: product.dimentions,
      },
      {
        title: "Peso",
        value: product.weight,
      },
      {
        title: "Batería",
        value: product.battery,
      },
      {
        title: "Cámara principal",
        value: product.primaryCamera,
      },
      {
        title: "Cámara secundaria",
        value: product.secondaryCmera,
      },
    ];

    return details;
  },
};

export default ProductsUtils;
