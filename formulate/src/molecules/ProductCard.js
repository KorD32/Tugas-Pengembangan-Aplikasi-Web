import React from "react"
import "../style/productcard.css"

export const ProductCard = (props) => { 
    return (
        <div className="product-card">
            <img src={props.cover ?? "not-available.jpeg"} alt="product"/>
            <h4 className="title">{props.title}</h4>
            <p className="description">{props.description}</p>
            <p className="price">{props.price}</p>
        </div>
    )
}