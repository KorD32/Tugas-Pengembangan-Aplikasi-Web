import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderHome } from "../component/HeaderHome";
import "../style/History.css";

const History = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("id"); 

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) {
        alert("User tidak ditemukan, silakan login ulang.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/web/orderdetail/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="history-page">
      <HeaderHome />
      <h2 className="history-title">Riwayat Transaksi</h2>

      {orders.length > 0 ? (
        <div className="orders-container">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-details">
                <h4 className="order-product-name">{order.product_name}</h4>
                <p className="order-price">Rp{order.price.toLocaleString("id-ID")}</p>
                <p className={`order-status ${order.status.toLowerCase()}`}>
                  Status: {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-orders">Tidak ada transaksi ditemukan.</p>
      )}
    </div>
  );
};

export default History;