import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  imageUrl = "not-available.jpeg",
  name = "Unnamed Product",
  price = 0,
  thumbnails = [],
}) => {
  const navigate = useNavigate();

  const formatRupiah = (price) => {
    const parsedPrice = parseFloat(price) || 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(parsedPrice);
  };

  const handleCardClick = () => {
    setTimeout(() => {
      navigate(`/productdetail/${id}`); 
    }, 600);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="image-section">
        <img src={imageUrl} alt="product cover" className="cover-image" />
      </div>
      <h4 className="title">{name}</h4>
      <div className="price-rating">
        <p className="price">{formatRupiah(price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;