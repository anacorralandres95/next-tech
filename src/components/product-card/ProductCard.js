import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.imgUrl} alt={product.model} />
      <small>{product.brand}</small>
      <p className="model">{product.model}</p>
      <p className="price">{product.price}€</p>
    </div>
  );
};

export default ProductCard;
