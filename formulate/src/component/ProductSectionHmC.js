import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../molecules/ProductCard";
import "../style/productsection.css";

export const ListProductHmC = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan produk
  const [activeIndex, setActiveIndex] = useState(0); // Indeks produk yang ditampilkan
  const productsPerPage = 4; // Jumlah produk per halaman

  // Fetch data dari API ketika komponen dimount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/web/products/cosmetic");
        if (response.data && response.data.length > 0) {
          setProducts(response.data); // Simpan data produk di state
        } else {
          console.warn("No products found in the category 'cosmetic'.");
        }
      } catch (error) {
        console.error("Error fetching cosmetic products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Fungsi untuk navigasi ke produk berikutnya
  const nextProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Fungsi untuk navigasi ke produk sebelumnya
  const prevProduct = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  // Produk yang akan ditampilkan berdasarkan `activeIndex`
  const displayedProducts = [
    ...products.slice(activeIndex),
    ...products.slice(0, activeIndex),
  ].slice(0, productsPerPage);

  // Render komponen
  return (
    <section className="product-section-desktop" id="products">
      <div className="product-slider">
        <button className="prev-button" onClick={prevProduct}>
          ❮
        </button>
        <div className="product-cards">
          {/* Jika produk tersedia, tampilkan; jika tidak, tampilkan pesan */}
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