import React from "react";
import { Rating } from "@mui/material";

const ProductCardPdr = ({ product, onClick }) => {
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price || 0); 
  };

  return (
    <div
      className="recommended-item"
      onClick={() => onClick && onClick(product)} 
    >
      <div className="image-section">
        <img
          src={product.imageUrl || "not-available.jpeg"} 
          alt={product.name || "Unnamed Product"} 
          className="recommended-img"
        />
      </div>
      <h4 className="title">{product.name || "Unnamed Product"}</h4>
      <p>{formatRupiah(product.price)}</p>
      <Rating value={product.rating || 0} precision={0.1} readOnly size="small" />
    </div>
  );
};

export default ProductCardPdr;