import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HeaderHome } from "../component/HeaderHome";
import RecommendedProducts from "../component/RecommendedProducts";
import ProductListPd from "../component/ProductSectionPd";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";

const ProductDetail = () => {
  const { id } = useParams(); // Ambil ID produk dari URL
  const [product, setProduct] = useState(null); // Produk utama
  const [recommendedProducts, setRecommendedProducts] = useState([]); // Produk rekomendasi

  // Fetch produk utama
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/web/products/id/${id}`);
        setProduct(response.data);

        // Setelah mendapatkan produk utama, fetch produk rekomendasi
        fetchRecommendedProducts(response.data.category, id);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    const fetchRecommendedProducts = async (category, productId) => {
      try {
        const response = await axios.get(`http://localhost:3000/web/products/${category}`);
        // Filter produk rekomendasi agar tidak termasuk produk utama
        const recommendations = response.data.filter((p) => p.id !== parseInt(productId));
        setRecommendedProducts(recommendations);
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; // Tampilkan loading jika data belum tersedia
  }

  return (
    <div className="product-detail">
      <HeaderHome />
      <main className="product-main">
        <ProductListPd product={product} />
      </main>
      <RecommendedProducts 
        products={recommendedProducts} 
        onRecommendationClick={(selectedProduct) => setProduct(selectedProduct)} 
      />
      <footer>
        <Footer />
        <FooterCr />
      </footer>
    </div>
  );
};

export default ProductDetail;