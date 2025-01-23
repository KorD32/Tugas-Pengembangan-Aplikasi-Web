import React, { useState } from "react";


const ProductCard = ({
  imageUrl = "not-available.jpeg",
  name = "Unnamed Product",
  category = "Uncategorized",
  price = "halo",
  thumbnails = [],
  onClick,
}) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  const formatRupiah = (price) => {
    const parsedPrice = parseFloat(price) || 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(parsedPrice);
  };

  return (
    <div className="product-card" onClick={() => onClick && onClick()}>
      <div className="image-section">
        <img 
          src={selectedImage} 
          alt="product cover" 
          className="cover-image"
        />
      </div>
      
      <h4 className="title">{name}</h4>
      <h5 className="category">{category}</h5>
      
      <div className="price-rating">
        <p className="price">{formatRupiah(price)}</p>
      </div>
      
      <div className="thumbnails">
        {Array.isArray(thumbnails) &&
          thumbnails.map((thumbnail, index) => (
            <img 
              key={index} 
              src={thumbnail} 
              alt={`Thumbnail ${index + 1}`} 
              className="thumbnail-image"
              onClick={() => setSelectedImage(thumbnail)}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
