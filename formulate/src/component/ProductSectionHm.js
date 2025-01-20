import React, { useState } from "react";
import { ProductCard } from "../molecules/ProductCard";

const ProductListHM = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.imageUrl);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <main className="product-list-hm">
      <div className="product-images">
        <div className="main-image">
          <img
            src={mainImage}
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
              onClick={() => handleThumbnailClick(src)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
        <div className="rating">
          <span>Rating: {product.rating} / 5</span>
        </div>
        <div className="quantity-selector">
          <button onClick={decreaseQuantity} className="quantity-btn">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-btn">+</button>
        </div>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>

      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-products-list">
          {product.relatedProducts?.map((relatedProduct, index) => (
            <ProductCard
              key={index}
              cover={relatedProduct.imageUrl}
              name={relatedProduct.name}
              category={relatedProduct.category}
              description={relatedProduct.description}
              price={relatedProduct.price}
              thumbnails={relatedProduct.thumbnails}
              rating={relatedProduct.rating}
              onThumbnailClick={handleThumbnailClick} // Menambahkan prop untuk handle klik thumbnail
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductListHM;
