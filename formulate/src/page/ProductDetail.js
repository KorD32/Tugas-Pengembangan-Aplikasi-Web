import React, { useState } from "react";
import { HeaderHome } from "../component/HeaderHome";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "900px", margin: "auto" }}>
    <HeaderHome />

      <main>
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Main Product Image */}
          <div style={{ flex: 1 }}>
            <img
              src="https://skintific.com/cdn/shop/files/s-05_226cc4d0-2a88-423f-aaa9-2106da190332.jpg?v=1713502577&width=180"
              alt="Product"
              style={{ width: "600px", borderRadius: "5px" }}
            />
            <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
              <img src="https://skintific.com/cdn/shop/files/my-11134207-23010-6kqqugsxz8lvec.jpg?v=1713502577&width=180" alt="Thumbnail" style={{ width: "150px" , borderRadius: "5px" }} />
              <img src="https://skintific.com/cdn/shop/files/my-11134207-7r98u-lre5drtsqj1z87.jpg?v=1713502577&width=180" alt="Thumbnail" style={{ width: "150px" ,borderRadius: "5px" }} />
              <img src="https://skintific.com/cdn/shop/files/my-11134207-7r98v-lpol88x6hoive7.jpg?v=1713502577&width=180" alt="Thumbnail" style={{ width: "150px" ,borderRadius: "5px" }} />
              <img src="https://skintific.com/cdn/shop/files/my-11134207-7r98r-lpol88x6evdz7e.jpg?v=1713502577&width=180" alt="Thumbnail" style={{ width: "150px" ,borderRadius: "5px" }} />
            </div>
          </div>

          {/* Product Details */}
          <div style={{ flex: 2 }}>
            <h2>SKINTIFIC 5X Ceramide Barrier Repair Gel Pelembab 30G</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Rp. 123.000</p>
            <p>⭐⭐⭐⭐⭐ (409 views)</p>
            <p style={{ marginBottom: "20px" }}>
            Diformulasi dengan 5 jenis Ceramide (5X Ceramide) yang berbeda yaitu CERAMIDE NP, CERAMIDE EOP, CERAMIDE AP, CERAMIDE AS, CERAMIDE NS yang bekerja sangat baik untuk memperbaiki dan menjaga pelindung alami kulit.
            Ceramide dapat membantu memperbaiki skin barier, melembabkan kulit, menenangkan sel kulit yang terganggu, mengurangi kemerahan, dan melembutkan tekstur kulit.
            </p>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <button onClick={decreaseQuantity} style={{ padding: "5px 10px" }}>
                -
              </button>
              <span style={{ margin: "0 10px" }}>{quantity}</span>
              <button onClick={increaseQuantity} style={{ padding: "5px 10px" }}>
                +
              </button>
            </div>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#FFD700",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* Recommended Products */}
        <section style={{ marginTop: "40px" }}>
          <h3>Rekomendasi Produk lainnya</h3>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <div style={{ textAlign: "center", flex: 1 }}>
              <img
                src= "https://skintific.com/cdn/shop/files/s-21_075defd2-3b76-4775-aba3-5ba986fd069e.jpg?v=1713524162&width=180"
                alt="Recommended Product"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <p>SKINTIFIC MSH Niacinamide Brightening Glowing Moisture Gel 30G</p>
              <p>Rp. 123.000</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div style={{ textAlign: "center", flex: 1 }}>
              <img
                src="https://skintific.com/cdn/shop/files/CT-377S-P11-073011-_-IGF.jpg?v=1727161536&width=180"
                alt="Recommended Product"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <p>SKINTIFIC - 2PCS Dark Spot Set |377 SymWhite Niacinamide Serum 20ml & Exfoliating Whitening 377 SymWhite Moisturizer 30g</p>
              <p>Rp. 236.000</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div style={{ textAlign: "center", flex: 1 }}>
              <img
                src="https://skintific.com/cdn/shop/files/lQDPJw7nLbnx26PNBdzNBdywWc5JtAFy1UAG1SP8fcu3AQ_1500_1500.jpg?v=1726829507&width=180"
                alt="Recommended Product"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <p>SKINTIFIC Ultra Cover Powder Foundation 9g
              </p>
              <p>Rp. 139.000</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div style={{ textAlign: "center", flex: 1 }}>
              <img
                src="https://skintific.com/cdn/shop/files/134.jpg?v=1719283207&width=180"
                alt="Recommended Product"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <p>SKINTIFIC - Perfect Stay Velvet Matte Cushion</p>
              <p>Rp. 149.000</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
