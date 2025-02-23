import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../style/Checkout.css";
import { HeaderHome } from "../component/HeaderHome";
import Rating from "@mui/material/Rating"; 

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product; 
  const userId = localStorage.getItem("id"); 

  const formatRupiah = (price) => {
    const parsedPrice = parseFloat(price) || 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(parsedPrice);
  };

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
        <div className="image-product">
          <img src={product?.imageUrl || "not-available.jpeg"} alt={product?.name || "Produk"} className="product-image-checkout" />
        </div>
        <div className="product-details-checkout">
          <h3>{product?.name || "Unknown Product"}</h3>
          <p>{product?.description || "No description available"}</p>
          <p className="rating-checkout"><Rating value={product?.rating || 0} readOnly precision={0.5} /> {product?.rating || "No rating available"}</p>
        </div>
      </div>

      <div className="transaction-details">
        <h3>Detail Transaksi</h3>
        <div className="detail-row">
          <span>Item Total</span>
          <span>{formatRupiah(product?.price) || "Rp0"}</span>
        </div>
        <div className="detail-row total">
          <span>Total Bayar</span>
          <span>{formatRupiah(product?.price) || "Rp0"}</span>
        </div>
      </div>

      <button className="pay-button" onClick={handleCheckout}>
        Selesaikan Pembayaran Anda
      </button>
    </div>
  );
};

export default Checkout;
