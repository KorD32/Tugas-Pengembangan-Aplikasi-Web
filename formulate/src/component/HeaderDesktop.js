import React from "react";
import "../style/headerdesktop.css";
import { Link } from "react-router-dom";

export const HeaderDesktop = () => { 
    return (
        <header className="header-desktop">
            <section>
                <p className="brand">FORMULATE</p>
            </section>
            <section>
                <ul className="nav_desktop">
                    <li>
                        <Link to="/dashboard/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/product">Produk</Link>
                    </li>
                    <li>
                        <Link to="/education">Edukasi</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Tentang Kami</Link> 
                    </li>
                </ul>
            </section>
            <section>
                <div className="button-login">
                    <Link to="/" className="login-start">Start Now</Link> 
                </div>
            </section>
        </header>
    );
};
