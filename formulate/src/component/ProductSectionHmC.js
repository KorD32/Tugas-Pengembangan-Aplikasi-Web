import React, { useState, useRef } from "react";
import ProductCardDb from "../molecules/ProductCardDb"; 
import "../style/productsectiondb.css";
import Products from "../data/Product";

export const ListProductHmC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;
  const sliderRef = useRef(null);

  const filteredProducts = Products.filter(
    (product) => product.category?.toLowerCase() === "cosmetic"
  );

  const displayedProducts = [
    ...filteredProducts.slice(activeIndex),
    ...filteredProducts.slice(0, activeIndex)
  ].slice(0, productsPerPage);

  const startTouch = useRef({ startX: 0, startY: 0, isTwoFingers: false });

  // Handle the touch start event
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      // Single finger movement: track for cursor movement
      startTouch.current.isTwoFingers = false;
    } else if (e.touches.length === 2) {
      // Two-finger movement: track for slider swipe
      startTouch.current.isTwoFingers = true;
      startTouch.current.startX = e.touches[0].clientX;
      startTouch.current.startY = e.touches[0].clientY;
    }
  };

  // Handle the touch move event
  const handleTouchMove = (e) => {
    if (startTouch.current.isTwoFingers && e.touches.length === 2) {
      const diffX = e.touches[0].clientX - startTouch.current.startX;
      const diffY = e.touches[0].clientY - startTouch.current.startY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) {
          // Swipe right
          prevProduct();
          startTouch.current.startX = e.touches[0].clientX; // Reset start position after moving
        } else if (diffX < -50) {
          // Swipe left
          nextProduct();
          startTouch.current.startX = e.touches[0].clientX; // Reset start position after moving
        }
      }
    }
  };

  const handleTouchEnd = () => {
    startTouch.current.isTwoFingers = false; // Reset when touch ends
  };

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

  return (
    <section
      className="product-section-desktop"
      id="products"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
                price={product.price}
              />
            ))
          ) : (
            <p>No cosmetic products available.</p>
          )}
        </div>

        <button className="next-button" onClick={nextProduct}>
          ❯
        </button>
      </div>
    </section>
  );
};
