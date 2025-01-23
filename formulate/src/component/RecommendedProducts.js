import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCardPdr from "../molecules/productcardPdr";
import "../style/recommendedproductpd.css";

const RecommendedProducts = ({ limit = 8 }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/web/products/recommended?limit=${limit}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      }
    };

    fetchRecommendedProducts();
  }, [limit]);

  if (products.length === 0) {
    return <p>No recommended products available.</p>;
  }

  return (
    <section className="recommended-products">
      <h3>Rekomendasi Produk Lainnya</h3>
      <div className="recommended-items">
        {products.map((product) => (
          <ProductCardPdr
            key={product.id}
            product={product}
            onClick={() => {
              window.location.href = `/productdetail/${product.id}`;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;