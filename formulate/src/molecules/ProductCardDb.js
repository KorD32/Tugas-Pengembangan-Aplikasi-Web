import React from "react";

const ProductCardDb = ({ imageUrl, name, description, price, rating, stock }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h4 className="title">{name}</h4>
      <p className="description">{description}</p>
      <div className="price">{price}</div>
    </div>
  );
};

export default ProductCardDb;
