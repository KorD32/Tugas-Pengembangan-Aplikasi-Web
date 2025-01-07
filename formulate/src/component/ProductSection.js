import products from "../data/Product"
import { ProductCard } from "../molecules/ProductCard"
import React from "react"


export const SectionDesktop = () => { 
    return(
        <section id="products">
            <h1 className="product-dekstop">PRODUCT</h1>
            <div className="product-container">
                {products.map((product) => {
                    return(
                        <ProductCard
                            key={product.id}
                            cover={product.cover}
                            title={product.title}
                            description={product.description}
                        />
                    )
                })}
            </div>
        </section>
    )
}