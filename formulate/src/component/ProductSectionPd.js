import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "../style/productsectionpd.css";

const RatingStars = ({ rating }) => (
  <div className="rating">
    <Rating value={rating} precision={0.5} readOnly size="small" />
    <span className="rating-value">({rating})</span>
  </div>
);

const ProductListPd = ({ product }) => {
  const navigate = useNavigate();

  const [currentProduct] = useState({
    ...product,
    name: product?.name || "Unknown Product", // Pastikan nama diisi
    imageUrl: product?.imageUrl || "not-available.jpeg",
    stock: product?.stock || 0,
    price: product?.price || 0,
    rating: product?.rating || 0,
    description: product?.description || "No description available.",
  });

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: currentProduct } });
  };

  const formatRupiah = (price) => {
    const parsedPrice = parseFloat(price) || 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(parsedPrice);
  };

  return (
    <main className="product-section-hm">
      <div className="product-image">
        <div className="main-image">
          <img src={currentProduct.imageUrl} alt={currentProduct.name} />
        </div>
      </div>

      <div className="product-info">
        <h2>{currentProduct.name}</h2>
        <RatingStars rating={currentProduct.rating} />
        <p className="price">{formatRupiah(currentProduct.price)}</p>
        <p className="description">{currentProduct.description}</p>

        <div className="buy-btn">
          <button
            className="add-to-cart-btn"
            disabled={currentProduct.stock === 0}
          >
            <AddShoppingCartIcon style={{ marginRight: "8px" }} />
            {currentProduct.stock === 0 ? "Stok Habis" : "Masukkan Keranjang"}
          </button>
          <button
            className="buy-now-btn"
            disabled={currentProduct.stock === 0}
            onClick={handleBuyNow}
          >
            <ShoppingBagIcon style={{ marginRight: "8px" }} />
            {currentProduct.stock === 0 ? "Stok Habis" : "Beli Sekarang"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductListPd;