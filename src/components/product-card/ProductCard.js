import React from "react";

const ProductCard = ({ product }) => {
  return (
    <a href={`/${product.id}`} className="product-card">
      <img src={product.imgUrl} alt={product.model} />
      <small>{product.brand}</small>
      <p className="model">{product.model}</p>
      <p className="price">{product.price}€</p>
    </a>
  );
};

export default ProductCard;
