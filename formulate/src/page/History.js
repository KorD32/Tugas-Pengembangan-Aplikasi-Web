import React from "react";
import orders from "../data/ProductHistory";
import { HeaderHome } from "../component/HeaderHome";
import { ListProductHmC } from "../component/ProductSectionHmC";

const History = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <HeaderHome />
      {orders.map((order, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          <img
            src={order.imageUrl}
            alt={order.productName}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          <div>
            <h4 style={{ margin: "0 0 10px" }}>{order.shopName}</h4>
            <p style={{ margin: "0 0 5px" }}>{order.productName}</p>
            {order.size && <p style={{ margin: "0 0 5px" }}>Size: {order.size}</p>}
            <p style={{ margin: "0 0 5px", color: "green" }}>
              Rp{order.originalPrice.toLocaleString("id-ID")}
            </p>
            <div>
              <button
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Beli Lagi
              </button>
              <button
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Nilai
              </button>
            </div>
          </div>
        </div>
      ))}
        <h2 style={{textalign: "center"}}>Rekomendasi Produk lainnya</h2>
        <ListProductHmC />
    </div>
  );
};

export default History;
