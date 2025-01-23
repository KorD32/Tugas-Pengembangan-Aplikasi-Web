import React, { useState } from "react";


const ProductCardDb = ({
  imageUrl = "not-available.jpeg",
  name = "Unnamed Product",
  category = "Uncategorized",
  price = "halo",
  thumbnails = [],
  onClick,
}) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  return (
    <div className="product-card-dashboard" onClick={() => onClick && onClick()}>
      <div className="image-section">
        <img 
          src={selectedImage} 
          alt="product cover" 
          className="cover-image"
        />
      </div>
      
      <h4 className="title">{name}</h4>
      
      
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

export default ProductCardDb;
