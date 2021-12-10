import React from "react";
import ProductsUtils from "../../utils/ProductUtils";
import { useSingularProduct } from "./useSingularProduct";

const SingularProduct = () => {
  const { product, onChangeColor, onChangeStorage, addCart } =
    useSingularProduct();

  if (!product) return <></>;

  const details = ProductsUtils.getProductTechnicDetails(product);

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

        {details.map((detail, i) => {
          if (detail.value) {
            return (
              <div className="technic-detail" key={i}>
                <small>{detail.title}</small>
                <p>{detail.value}</p>
              </div>
            );
          }
        })}

        <div className="product-selection">
          <div>
            <small className="small">Elige color</small>
            <select onChange={onChangeColor}>
              {product.options.colors.map((color, i) => {
                return (
                  <option value={color.code} key={i}>
                    {color.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <small className="small">Elige almacenamiento</small>
            <select onChange={onChangeStorage}>
              {product.options.storages.map((store, i) => {
                return (
                  <option value={store.code} key={i}>
                    {store.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <button onClick={addCart}>
          <p>AÑADIR</p>
        </button>
      </div>
    </div>
  );
};
export default SingularProduct;
