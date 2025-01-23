import React from "react";
import { Rating } from "@mui/material";

const ProductCardPdr = ({ product, onClick }) => {
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="recommended-item" onClick={() => onClick(product)}>
      <div className="image-section">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="recommended-img"
        />
      </div>
      <h4>{product.name}</h4>
      <p>{formatRupiah(product.price)}</p>
      <Rating value={product.rating} precision={0.5} readOnly size="small" />
    </div>
  );
};

export default ProductCardPdr;
