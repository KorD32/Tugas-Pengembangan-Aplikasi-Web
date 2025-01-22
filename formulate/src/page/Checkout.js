import { useState } from 'react';
import "../style/Checkout.css"

const Checkout = () => {

  const [open, setOpen] = useState(false)
  const popUp = ()=>{
    setOpen(true)
    alert("Payment Successfully")
  }


  return (
    <div className="container">
      <h2 className="header">Ringkasan Pemesanan</h2>

      <div className="product">
        <img 
          src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/6/3/8470268/8470268_84a28e0b-5c4f-4de5-afe0-2b9ae19d9b72_700_700" 
          alt="KAHF Face Wash" 
          className="product-image" 
        />
        <div className="product-details">
          <h3>KAHF</h3>
          <p>Face Wash Skin Energizing & Brightening 100ml</p>
          <p>⭐ 4.9 | Penilaian Produk (26,1RB)</p>
        </div>
      </div>

      <div className="transaction-details">
        <h3>Detail Transaksi</h3>
        <div className="detail-row">
          <span>Item Total</span>
          <span>Rp50.000</span>
        </div>
        <div className="detail-row">
          <span>Shipping</span>
          <span>Rp27.000</span>
        </div>
        <div className="detail-row">
          <span>Sales Tax</span>
          <span>Rp5.000</span>
        </div>
        <div className="detail-row total">
          <span>Total Bayar</span>
          <span>Rp82.000</span>
        </div>
      </div>

      <div className="payment-methods">
        <h3>Metode Pembayaran</h3>
        <button className="payment-button dana">Dana</button>
        <button className="payment-button ovo">Ovo</button>
        <button className="payment-button gopay">Gopay</button>
        <button className="payment-button shopeepay">ShopeePay</button>
        <button className="payment-button bank">Transfer Bank</button>
      </div>

      <button className="pay-button" onClick={popUp}>Selesaikan Pembayaran Anda</button>
    </div>
  );
};

export default Checkout;