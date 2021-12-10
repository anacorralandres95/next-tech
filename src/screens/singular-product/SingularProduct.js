import React from "react";
import { useSingularProduct } from "./useSingularProduct";

const SingularProduct = () => {
  const { product } = useSingularProduct();

  if (!product) return <></>;

  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={product.imgUrl} />
      </div>

      <div className="product-details">
        <div className="product-header">
          <small>{product.brand}</small>
          <p>{product.price}€</p>
        </div>
        <p>{product.model}</p>

        <p className="technic-title">Detalles técnicos</p>

        {product.cpu && (
          <div className="technic-detail">
            <small>CPU</small>
            <p>{product.cpu}</p>
          </div>
        )}

        {product.ram && (
          <div className="technic-detail">
            <small>RAM</small>
            <p>{product.ram}</p>
          </div>
        )}

        {product.os && (
          <div className="technic-detail">
            <small>Sistema operativo</small>
            <p>{product.os}</p>
          </div>
        )}

        {product.displayType && (
          <div className="technic-detail">
            <small>Tipo de pantalla</small>
            <p>{product.displayType}</p>
          </div>
        )}

        {product.displayResolution && (
          <div className="technic-detail">
            <small>Resolución de pantalla</small>
            <p>{product.displayResolution}</p>
          </div>
        )}

        {product.displaySize && (
          <div className="technic-detail">
            <small>Tamaño de pantalla</small>
            <p>{product.displaySize}</p>
          </div>
        )}

        {product.dimentions && (
          <div className="technic-detail">
            <small>Dimensiones</small>
            <p>{product.dimentions}</p>
          </div>
        )}

        {product.weight && (
          <div className="technic-detail">
            <small>Peso</small>
            <p>{product.weight}gr</p>
          </div>
        )}

        {product.battery && (
          <div className="technic-detail">
            <small>Batería</small>
            <p>{product.battery}gr</p>
          </div>
        )}

        {product.primaryCamera && (
          <div className="technic-detail">
            <small>Cámara principal</small>
            <p>{product.primaryCamera}gr</p>
          </div>
        )}

        {product.secondaryCmera && (
          <div className="technic-detail">
            <small>Cámara secundaria</small>
            <p>{product.secondaryCmera}gr</p>
          </div>
        )}

        <button>
          <p>AÑADIR</p>
        </button>
      </div>
    </div>
  );
};
export default SingularProduct;
