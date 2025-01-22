import React, { useState } from "react";
import { HeaderHome } from "../component/HeaderHome";
import products from "../data/Product";
import RecommendedProducts from "../component/RecommendedProducts";
import "../style/productdetail.css";
import ProductListPd from "../component/ProductSectionPd";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";

const ProductDetail = () => {
  const [product, setProduct] = useState(products.find((p) => p.id === 1));

  const handleRecommendationClick = (recommendedProduct) => {
    setProduct(recommendedProduct);
  };

  return (
    <div className="product-detail">
      <HeaderHome />

      <main className="product-main">
        <ProductListPd product={product} key={product.id} />
      </main>

      <RecommendedProducts
        products={products}
        onRecommendationClick={handleRecommendationClick}
      />
      <footer>
        <Footer />
        <FooterCr />
      </footer>
    </div>
  );
};

export default ProductDetail;
