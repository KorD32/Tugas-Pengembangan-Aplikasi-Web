import React, { useState } from "react";
import ProductCardDb from "../molecules/ProductCardDb"; 
import products from "../data/Product";
import "../style/productsectiondb.css";

export const ListProductDb = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const nextProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1 
    );
  };

  const displayedProducts = [
    ...products.slice(activeIndex),
    ...products.slice(0, activeIndex),
  ].slice(0,productsPerPage)

  return (
    <section className="product-section-dashboard" id="products">
      <h1>Produk</h1>
      <div className="product-slider-dashboard">
        <button className="prev-button-dashboard" onClick={prevProduct}>
          ❮
        </button>
        <div className="product-cards-dashboard">
          {displayedProducts.map((product) => (
            <ProductCardDb 
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <button className="next-button-dashboard" onClick={nextProduct}>
          ❯
        </button>
      </div>
    </section>
  );
};