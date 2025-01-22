import React from "react";
import ProductCardPdr from "../molecules/productcardPdr";
import "../style/recommendedproductpd.css"; 

const RecommendedProducts = ({ products, onRecommendationClick }) => {
  return (
    <section className="recommended-products">
      <h3>Rekomendasi Produk Lainnya</h3>
      <div className="recommended-items">
        {products.map((product) => (
          <ProductCardPdr
            key={product.id}
            product={product}
            onClick={onRecommendationClick}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
