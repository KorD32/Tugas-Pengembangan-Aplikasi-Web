import React, { useState } from "react";
import ProductCardDb from "../molecules/ProductCardDb"; 
import productsData from "../data/Product";
import "../style/productsectiondb.css"

export const ListProductDb = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const nextProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < productsData.length - productsPerPage
        ? prevIndex + 1
        : 0
    );
  };

  const prevProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : productsData.length - productsPerPage
    );
  };

  const displayedProducts = productsData.slice(
    activeIndex,
    activeIndex + productsPerPage
  );

  return (
    <section className="product-section-desktop" id="products">
      <h1>Product</h1>
      <div className="product-slider">
        <button className="prev-button" onClick={prevProduct}>
          ❮
        </button>
        <div className="product-cards">
          {displayedProducts.map((product) => (
            <ProductCardDb 
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
        <button className="next-button" onClick={nextProduct}>
          ❯
        </button>
      </div>
    </section>
  );
};
