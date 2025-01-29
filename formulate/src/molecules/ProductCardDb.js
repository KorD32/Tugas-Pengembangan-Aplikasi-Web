import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCardDb = ({
  imageUrl = "not-available.jpeg",
  name = "Unnamed Product",
  category = "Uncategorized",
  price = 0,
  thumbnails = [],
  onClick,
}) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl);
  const navigate = useNavigate();

  const formatRupiah = (price) => {
    const parsedPrice = Number(price) || 0; 
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(parsedPrice);
  };

  const handleCardClick = () => {
    setTimeout(() => {
      navigate(`/login/`); 
    }, 600); //navigate ke halaman login setelah 1 detik
  };

  return (
    <div className="product-card-dashboard" onClick={handleCardClick}>
      <div className="image-section">
        <img src={selectedImage} alt={name} className="cover-image" />
      </div>
      <h4 className="title">{name}</h4>
      <div>
        <p className="price">{formatRupiah(price)}</p> 
      </div>
      <div className="thumbnails">
        {Array.isArray(thumbnails) && thumbnails.length > 0 &&
          thumbnails.map((thumbnail, index) => (
            <img 
              key={index} 
              src={thumbnail} 
              alt={`Thumbnail ${index + 1}`} 
              className="thumbnail-image"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(thumbnail);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductCardDb;