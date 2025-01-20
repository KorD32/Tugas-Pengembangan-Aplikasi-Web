import React from "react";
import PropTypes from "prop-types";

export const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img 
                src={props.imageUrl ?? "not-available.jpeg"} 
                alt="product cover" 
                className="cover-image"
            />
            <h4 className="title">{props.name}</h4>
            <h5 className="category">{props.category || "Skincare"}</h5>
            <p className="description">{props.description}</p>
            <div className="price-rating">
                <p className="price">{props.price}</p>
                <div className="rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < Math.floor(props.rating) ? "filled" : "empty"}>
                            ★
                        </span>
                    ))}
                    <span className="rating-value">({props.rating})</span>
                </div>
            </div>

            <div className="thumbnails">
                {props.thumbnails?.map((thumbnail, index) => (
                    <img 
                        key={index} 
                        src={thumbnail} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="thumbnail-image"
                    />
                ))}
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    thumbnails: PropTypes.arrayOf(PropTypes.string)
};
