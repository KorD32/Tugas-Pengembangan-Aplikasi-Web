import React from "react";
import { Rating } from "@mui/material";

const ProductCardPdr = ({ product, onClick }) => {
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price || 0); // Pastikan nilai default jika `price` kosong
  };

  return (
    <div
      className="recommended-item"
      onClick={() => onClick && onClick(product)} // Pastikan `onClick` ada sebelum dipanggil
    >
      <div className="image-section">
        <img
          src={product.imageUrl || "not-available.jpeg"} // Fallback jika `imageUrl` kosong
          alt={product.name || "Unnamed Product"} // Fallback jika `name` kosong
          className="recommended-img"
        />
      </div>
      <h4>{product.name || "Unnamed Product"}</h4>
      <p>{formatRupiah(product.price)}</p>
      <Rating value={product.rating || 0} precision={0.5} readOnly size="small" />
    </div>
  );
};

export default ProductCardPdr;