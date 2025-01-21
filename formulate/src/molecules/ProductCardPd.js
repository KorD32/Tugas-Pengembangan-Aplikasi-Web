import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = (props) => {
    const [selectedImage, setSelectedImage] = useState(props.imageUrl || "not-available.jpeg");

    return (
        <div className="product-card">
            <img 
                src={selectedImage} 
                alt="product cover" 
                className="cover-image"
            />
            <h4 className="title">{props.name}</h4>
            <h5 className="category">{props.category}</h5>
            <p className="description">{props.description}</p>
            <div className="price-rating">
                <p className="price">{props.price}</p>
            </div>
            <div className="thumbnails">
                {props.thumbnails.map((thumbnail, index) => (
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

ProductCard.defaultProps = {
    category: "Skincare",
    thumbnails: []
};

ProductCard.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    thumbnails: PropTypes.arrayOf(PropTypes.string)
};

export default ProductCard;
