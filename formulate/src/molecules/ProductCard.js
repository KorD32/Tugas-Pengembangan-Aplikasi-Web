import React from "react";

export const ProductCard = (props) => { 
    return(
        <div className="product-card">
            <img src={props.cover ?? "not-available.jpeg"} alt="product"/>
            <h4 className="title">{props.title}</h4>
            <h5 className="category">{props.category}</h5>
            <p className="description">{props.description}</p>
            <p className="price">{props.price}</p>
        </div>
    )
}