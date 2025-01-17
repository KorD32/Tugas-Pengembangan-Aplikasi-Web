import React, { useState } from "react";
import { HeaderHome } from "../component/HeaderHome";
import { Rating } from "@mui/material"; // Import Rating dari Material-UI
import "../style/productdetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "https://skintific.com/cdn/shop/files/s-05_226cc4d0-2a88-423f-aaa9-2106da190332.jpg?v=1713502577&width=180"
  ); // Set default main image

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Data produk
  const product = {
    name: "SKINTIFIC 5X Ceramide Barrier Repair Gel Pelembab 30G",
    price: "Rp. 123.000",
    description: "Diformulasi dengan 5 jenis Ceramide (5X Ceramide) yang berbeda...",
    rating: 4.5,
    imageUrl: mainImage,
    thumbnails: [
      "https://skintific.com/cdn/shop/files/my-11134207-23010-6kqqugsxz8lvec.jpg?v=1713502577&width=180",
      "https://skintific.com/cdn/shop/files/my-11134207-7r98u-lre5drtsqj1z87.jpg?v=1713502577&width=180",
      "https://skintific.com/cdn/shop/files/my-11134207-7r98v-lpol88x6hoive7.jpg?v=1713502577&width=180",
      "https://skintific.com/cdn/shop/files/my-11134207-7r98r-lpol88x6evdz7e.jpg?v=1713502577&width=180",
    ],
  };

  // Fungsi untuk mengganti gambar utama saat thumbnail diklik
  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="product-detail">
      <HeaderHome />

      <main className="product-main">
        <div className="product-images">
          <div className="main-image">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-main-img"
            />
          </div>
          <div className="thumbnail-images">
            {product.thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="product-thumbnail-img"
                onClick={() => handleThumbnailClick(src)} // Menambahkan event onClick
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <div className="rating">
            <Rating value={product.rating} precision={0.5} readOnly size="large" />
            <span>({409} views)</span>
          </div>
          <p className="description">{product.description}</p>
          <div className="quantity-selector">
            <button onClick={decreaseQuantity} className="quantity-btn">-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity} className="quantity-btn">+</button>
          </div>
          <button className="add-to-cart-btn">Add To Cart</button>
        </div>
      </main>

      {/* Recommended Products */}
      <section className="recommended-products">
        <h3>Rekomendasi Produk lainnya</h3>
        <div className="recommended-items">
          {/* Repeat for each recommended product */}
          {["product1", "product2", "product3"].map((item, index) => (
            <div className="recommended-item" key={index}>
              <img
                src={product.imageUrl}
                alt="Recommended Product"
                className="recommended-img"
              />
              <p>SKINTIFIC 5X Ceramide Barrier Repair Gel</p>
              <p>{product.price}</p>
              <Rating value={product.rating} precision={0.5} readOnly size="small" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
