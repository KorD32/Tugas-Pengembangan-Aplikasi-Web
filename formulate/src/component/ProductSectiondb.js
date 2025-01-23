import React, { useState } from "react";
import ProductCardDb from "../molecules/ProductCardDb"; 
import productsData from "../data/Product";
import "../style/productsection.css";

export const ListProductDb = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const nextProduct = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % productsData.length
    );
  };

  const prevProduct = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + productsData.length) % productsData.length
    );
  };

  // Menggunakan sirkular untuk produk yang ditampilkan
  const displayedProducts = [
    ...productsData.slice(activeIndex),
    ...productsData.slice(0, activeIndex)
  ].slice(0, productsPerPage);

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
              hideDetails={true} // Menambahkan prop untuk menyembunyikan detail
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
