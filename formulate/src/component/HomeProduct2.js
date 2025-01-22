import React, { useState } from "react";
import ProductCardDb from "../molecules/ProductCardDb"; 
import "../style/productsectiondb.css"
import ProductFashion from "../data/ProductFashion";


export const HomeProduct2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const nextProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < ProductFashion.length - productsPerPage
        ? prevIndex + 1
        : 0
    );
  };

  const prevProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : ProductFashion.length - productsPerPage
    );
  };

  const displayedProducts = ProductFashion.slice(
    activeIndex,
    activeIndex + productsPerPage
  );

  return (
    <section className="product-section-desktop" id="products">
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
              price={product.price}
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
