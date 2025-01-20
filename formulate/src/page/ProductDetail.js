import React, { useState } from "react";
import { HeaderHome } from "../component/HeaderHome";
import { Rating } from "@mui/material"; 
import products from "../data/Product";
import "../style/productdetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(""); // Inisialisasi dengan gambar default kosong
  const [product, setProduct] = useState(products.find(p => p.id === 1)); // Ambil produk pertama sebagai default

  // Set gambar utama awal
  React.useEffect(() => {
    setMainImage(product.imageUrl); // Set gambar utama dari data produk
  }, [product]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleThumbnailClick = (src) => {
    setMainImage(src); // Update gambar utama ketika thumbnail diklik
  };

  const handleRecommendationClick = (recommendedProduct) => {
    setProduct(recommendedProduct); // Ganti produk dengan yang dipilih dari rekomendasi
    setMainImage(recommendedProduct.imageUrl); // Ganti gambar utama dengan gambar produk rekomendasi
  };

  return (
    <div className="product-detail">
      <HeaderHome />

      <main className="product-main">
        <div className="product-images">
          <div className="main-image">
            <img
              src={mainImage} // Gunakan state mainImage
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
                onClick={() => handleThumbnailClick(src)} // Mengubah gambar utama saat thumbnail diklik
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

      <section className="recommended-products">
        <h3>Rekomendasi Produk lainnya</h3>
        <div className="recommended-items">
          {products.slice(0, 3).map((item, index) => ( // Ambil 3 produk rekomendasi
            <div
              className="recommended-item"
              key={index}
              onClick={() => handleRecommendationClick(item)} // Ganti produk utama saat rekomendasi diklik
            >
              <img
                src={item.imageUrl}
                alt="Recommended Product"
                className="recommended-img"
              />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <Rating value={item.rating} precision={0.5} readOnly size="small" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
