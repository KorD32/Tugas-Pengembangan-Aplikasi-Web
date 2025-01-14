import React, { useState } from 'react';
import { ProductCard } from "../molecules/ProductCard";
import products from "../data/Product";
import "../style/productcard.css";

export const ListProduct = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProduct = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const displayedProducts = [
        products[(activeIndex + 0) % products.length],
        products[(activeIndex + 1) % products.length],
        products[(activeIndex + 2) % products.length],
        products[(activeIndex + 3) % products.length]
    ];

    return (
        <section className='product-section' id="products">
            <h1 className="product-dekstop">PRODUCT</h1>
            <div className="product-slider">
                <button className="prev-btn" onClick={prevProduct}>❮</button>
                <div className="product-cards">
                    {displayedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            cover={product.cover}
                            title={product.title}
                            description={product.description}
                        />
                    ))}
                </div>
                <button className="next-btn" onClick={nextProduct}>❯</button>
            </div>
        </section>
    );
};
