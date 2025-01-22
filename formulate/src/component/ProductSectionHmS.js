import React, { useState } from "react";
import ProductCardDb from "../molecules/ProductCardDb"; 
import productsData from "../data/Product";
import "../style/productsectiondb.css"

export const ListProductHmS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const nextProduct = () => {
    setActiveIndex((prevIndex) => 
      prevIndex < filteredProducts.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevProduct = () => {
    setActiveIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : filteredProducts.length - 1
    );
  };

  const filteredProducts = productsData.filter(
    (product) => product.category && product.category.toLowerCase() === "skincare"
  );

  const displayedProducts = [
    ...filteredProducts.slice(activeIndex),
    ...filteredProducts.slice(0, activeIndex)
  ].slice(0, productsPerPage);

  return (
    <section className="product-section-desktop" id="products">
      <div className="product-slider">
        <button className="prev-button" onClick={prevProduct}>
          ❮
        </button>
        <div className="product-cards">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCardDb 
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                description={product.description}
              />
            ))
          ) : (
            <p>No skincare products available.</p>
          )}
        </div>
        <button className="next-button" onClick={nextProduct}>
          ❯
        </button>
      </div>
    </section>
  );
};
