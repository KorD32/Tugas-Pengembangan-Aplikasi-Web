import React from "react";
import "../style/headerdesktop.css";
import { Link } from "react-router-dom";

export const HeaderDesktop = () => { 
    return (
        <header className="header-desktop">
            <section>
                <Link to="/" className="brand">FORMULATE</Link>
            </section>
            <section>
                <ul className="nav_desktop">
                    <li>
                        <Link to="/dashboard">Home</Link> 
                    </li>
                    <li>
                        <Link to="/product">Produk</Link> 
                    </li>
                    <li>
                        <Link to="/edukasi">Edukasi</Link>
                    </li>
                    <li>
                        <Link to="/contact">Tentang Kami</Link> 
                    </li>
                </ul>
            </section>
            <section>
                <div className="button-login"> 
                    <Link to="/login/" className="login-start">Start Now</Link> 
                </div>
            </section>
        </header>
    );
};
