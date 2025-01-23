import React, { useState } from "react";
import ProductCard from "../molecules/ProductCard";
import "../style/productsection.css"
import Products from "../data/Product";

export const ListProductHmF = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const filteredProducts = Products.filter(
    (product) => product.category && product.category.toLowerCase() === "outfit"
  );

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
          {displayedProducts.map((product) => (
            <ProductCard
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
