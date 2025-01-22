import React from "react";
import "../style/footer.css";

// Mengimpor ikon dari Material UI
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return (
        <div className="footer">
            <section className="section">
                <div className="term-condition">
                    <h3>Syarat & Ketentuan</h3>
                    <ul>
                        <li><a href="delivery">Kebijakan Pengiriman</a></li>
                        <li><a href="privacy">Kebijakan Pribadi</a></li>
                        <li><a href="service">Persyaratan Layanan</a></li>
                        <li><a href="Return-exchange">Kebijakan Pengembalian dan Penukaran</a></li>
                        <li><a href="tracking-order">Pelacakan Pesanan</a></li>
                    </ul>
                </div>
                <div className="customer-care">
                    <h3>Informasi</h3>
                    <ul>
                        <li><a href="about-us">Tentang Kami</a></li>
                        <li><a href="contact">Hubungi Kami</a></li>
                        <li><a href="faq">FAQs</a></li>
                    </ul>
                </div>
            </section>
            <section className="section">
                <div className="company-info">
                    <h3>Layanan Pelanggan</h3>
                    <ul>
                        <li>Whatsapp</li>
                        <li><a href="contact">081223203492</a></li>
                    </ul>
                </div>
                <div className="find-us">
                    <h3>Bagaimana Cara Menemukan Kami</h3>
                    <div className="account-social-media">
                        <a className="image-footer" href="https://www.facebook.com">
                            <FacebookIcon sx={{ fontSize: 25 }} />
                        </a>
                        <a className="image-footer" href="https://www.instagram.com">
                            <InstagramIcon sx={{ fontSize: 25 }} />
                        </a>
                        <a className="image-footer" href="https://www.youtube.com">
                            <YouTubeIcon sx={{ fontSize: 25 }} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
