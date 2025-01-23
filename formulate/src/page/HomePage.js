import React from "react";
import { ListProductHmC } from "../component/ProductSectionHmC";
import { ListProductHmF } from "../component/ProductSectionHmF";
import { ListProductHmS } from "../component/ProductSectionHmS";
import { HeaderHome } from "../component/HeaderHome";
import { ListBanner } from "../component/BannerSection";

export const HomePage = () => {
  return (
    <div>
      <HeaderHome />
      <ListBanner />
      <section>
        <h1 style={{ padding: "20px", marginBottom: "-75px" }}>Skincare</h1>
        <ListProductHmS />
      </section>
      <section>
        <h1 style={{ padding: "20px", marginBottom: "-75px" }}>Cosmetic</h1>
        <ListProductHmC />
      </section>
      <section>
        <h1 style={{ padding: "20px", marginBottom: "-75px" }}>Outfit</h1>
        <ListProductHmF />
      </section>
    </div>
  );
};