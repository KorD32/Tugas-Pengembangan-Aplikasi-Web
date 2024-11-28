import React from "react"
import "../style/footer.css"


export const Footer = () => { 
    return ( 
        <div className="footer">
            <section className="section"> 
                <div className="term-condition"> 
                    <ul>
                        <h3>Syarat & ketentuan</h3>
                        <li>
                            <a href="delivery">Kebijakan pengiriman</a>
                        </li>
                        <li>
                            <a href="privacy">Kebijakan Pribadi</a>
                        </li>
                        <li>
                            <a href="service">Persyaratan layanan</a>
                        </li>
                        <li>
                            <a href="Return-exchange">Kebijakan pengembalian dan penukaran</a>
                        </li>
                        <li>
                            <a href="tracking-order">pelacakan pesanan</a>
                        </li>
                    </ul>
                </div>
                <div className="customer-care"> 
                    <ul>
                        <h3>Informasi</h3>
                        <li>
                            <a href="about-us">Tentang kami</a>
                        </li>
                        <li>
                            <a href="contact">Hubungi kami</a>
                        </li>
                        <li>
                            <a href="faq">FAQs</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section">
                <div className="company-info">
                    <ul>
                        <h3>Layanan pelanggan</h3>
                        <li>
                            Whatsapp
                        </li>
                        <li>
                            <a href="contact">081223203492</a>
                        </li>
                    </ul>
                </div>
                <div className="find-us">
                    <div>
                        <h3>bagaimana cara menemukan kami</h3>
                        <a className="image-footer" href="facebook"><img src="https://img.icons8.com/?size=100&id=435&format=png&color=000000" alt="facebook"/></a>
                        <a className="image-footer" href="instagram"><img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="instagram"/></a>
                        <a className="image-footer" href="youtube"><img src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000" alt="youtube"/></a>
                    </div>
                </div>
            </section>
        </div>
    )
}