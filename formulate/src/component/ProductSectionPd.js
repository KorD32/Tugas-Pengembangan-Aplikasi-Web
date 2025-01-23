import React, { useState } from "react";
import ProductCardPd from "../molecules/ProductCardPd";
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
  const [currentProduct, setCurrentProduct] = useState({
    name: product?.name || "Unknown Product",
    imageUrl: product?.imageUrl || "not-available.jpeg",
    thumbnails: Array.isArray(product?.thumbnails) ? product.thumbnails : [],
    stock: product?.stock || 0,
    price: product?.price || 0,
    rating: product?.rating || 0,
    description: product?.description || "No description available.",
  });

  const [mainImage, setMainImage] = useState(currentProduct.imageUrl);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < currentProduct.stock) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  const handleProductClick = (newProduct) => {
    setCurrentProduct(newProduct);
    setMainImage(newProduct.imageUrl);
    setQuantity(1);
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
          <img src={mainImage} alt={currentProduct.name} />
        </div>
        {/* Tampilkan thumbnails hanya jika jumlahnya lebih dari 1 */}
        {currentProduct.thumbnails.length > 1 && (
          <div className="thumbnail-images">
            {currentProduct.thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="product-thumbnail-img"
                onClick={() => handleThumbnailClick(src)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-info">
        <h2>{currentProduct.name}</h2>
        <p className="price">{formatRupiah(currentProduct.price)}</p>
        <p className="description">{currentProduct.description}</p>
        <RatingStars rating={currentProduct.rating} />

        <div className="quantity-selector">
          <button onClick={decreaseQuantity} className="quantity-btn">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-btn">+</button>
          <div className="stock-info">
            <p>{currentProduct.stock > 0 ? `Tersedia: ${currentProduct.stock}` : "Stok Habis"}</p>
          </div>
        </div>

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
            onClick={() => alert("Beli Sekarang!")}
          >
            <ShoppingBagIcon style={{ marginRight: "8px" }} />
            {currentProduct.stock === 0 ? "Stok Habis" : "Beli Sekarang"}
          </button>
        </div>
      </div>

      <div className="related-products">
        <div className="related-products-list">
          {currentProduct.products?.map((product) => (
            <ProductCardPd
              key={product.id}
              cover={product.imageUrl}
              name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
              thumbnails={product.thumbnails}
              rating={product.rating}
              stock={product.stock}
              onProductClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductListPd;