import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../molecules/ProductCard";
import "../style/productsection.css";

export const ListProductHmS = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/web/products/skincare");
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          console.warn("No products found in the category 'skincare'.");
        }
      } catch (error) {
        console.error("Error fetching skincare products:", error);
      }
    };

    fetchProducts();
  }, []);

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
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl || (product.thumbnails && product.thumbnails[0])}
                name={product.name}
                description={product.description}
                price={product.price}
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