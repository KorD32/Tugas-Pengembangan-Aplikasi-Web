import React from "react";
import { Rating } from "@mui/material";

const ProductCardPdr = ({ product, onClick }) => {
  return (
    <div className="recommended-item" onClick={() => onClick(product)}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="recommended-img"
      />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <Rating value={product.rating} precision={0.5} readOnly size="small" />
    </div>
  );
};

export default ProductCardPdr;
