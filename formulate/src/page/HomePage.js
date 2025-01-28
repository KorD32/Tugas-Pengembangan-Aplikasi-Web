import React from "react";
import { ListProductHmC } from "../component/ProductSectionHmC";
import { ListProductHmF } from "../component/ProductSectionHmF";
import { ListProductHmS } from "../component/ProductSectionHmS";
import { HeaderHome } from "../component/HeaderHome";
import { ListBanner } from "../component/BannerSection";
import "../style/homepage.css"; 

export const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderHome />
      <ListBanner />

      <section className="product-category">
        <h1>Skincare</h1>
        <ListProductHmS />
      </section>

      <section className="product-category">
        <h1>Cosmetic</h1>
        <ListProductHmC />
      </section>

      <section className="product-category">
        <h1>Outfit</h1>
        <ListProductHmF />
      </section>
    </div>
  );
};