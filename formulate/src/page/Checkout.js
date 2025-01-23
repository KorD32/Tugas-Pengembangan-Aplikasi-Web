import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../style/Checkout.css";
import { HeaderHome } from "../component/HeaderHome";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product; 
  const userId = localStorage.getItem("id"); 

  const handleCheckout = async () => {
    if (!userId) {
      alert("User tidak ditemukan, silakan login ulang.");
      navigate("/login");
      return;
    }

    if (!product || !product.name) {
      alert("Produk tidak valid. Silakan pilih produk lagi.");
      navigate("/home");
      return;
    }

    try {
      const orderData = {
        user_id: userId,
        product_id: product.id,
        product_name: product.name, 
        price: product.price,
        quantity: 1, 
        status: "pending",
      };

      const response = await axios.post("http://localhost:3000/web/orderdetail/create", orderData);
      console.log("Response data:", response.data);
     
      if (response.status === 201) {
        alert("Pembayaran berhasil!");
        navigate("/history");
      } else {
        throw new Error("Gagal membuat pesanan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Terjadi kesalahan saat melakukan pembayaran. Silakan coba lagi.");
    }
  };

  return (
    <div className="container-checkout">
      <HeaderHome />
      <h2 className="header-checkout">Ringkasan Pemesanan</h2>

      <div className="product-checkout">
        <img src={product?.imageUrl || "not-available.jpeg"} alt={product?.name || "Produk"} className="product-image-checkout" />
        <div className="product-details-checkout">
          <h3>{product?.name || "Unknown Product"}</h3>
          <p>{product?.description || "No description available"}</p>
          <p>⭐ {product?.rating || 0}</p>
        </div>
      </div>

      <div className="transaction-details">
        <h3>Detail Transaksi</h3>
        <div className="detail-row">
          <span>Item Total</span>
          <span>Rp{product?.price?.toLocaleString("id-ID") || 0}</span>
        </div>
        <div className="detail-row total">
          <span>Total Bayar</span>
          <span>Rp{product?.price?.toLocaleString("id-ID") || 0}</span>
        </div>
      </div>

      <button className="pay-button" onClick={handleCheckout}>
        Selesaikan Pembayaran Anda
      </button>
    </div>
  );
};

export default Checkout;