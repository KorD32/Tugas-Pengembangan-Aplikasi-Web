import React, { useState } from 'react';
import { ProductCard } from "../molecules/ProductCard";
import products from "../data/Product";
import "../style/productcard.css";

export const ListProduct = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProduct = () => {
        if (activeIndex < products.length - 4) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    const prevProduct = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        } else {
            setActiveIndex(products.length - 4);
        }
    };

    const displayedProducts = products.slice(activeIndex, activeIndex + 4);

    return (
        <section className='product-section-desktop' id="products">
            <h1 className="">Product</h1>
            <div className="product-slider">
                <button className="prev-button" onClick={prevProduct}>❮</button>
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
                <button className="next-button" onClick={nextProduct}>❯</button>
            </div>
        </section>
    );
};
