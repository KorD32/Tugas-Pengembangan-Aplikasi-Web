import React from "react"
import "../style/headerdesktop.css"


export const HeaderDesktop = () => { 
    return (
        <header className="header-desktop"> 
            <section> 
                <p className="brand">FORMULATE</p>
            </section>
            <section> 
                <ul className="nav_desktop">
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/Product">Produk</a>
                    </li>
                    <li>
                        <a href="/Education">Edukasi</a>
                    </li>
                    <li>
                        <a href="/Contact">Tentang Kami</a>
                    </li>
                </ul>
            </section>
            <section> 
                <div className="buttom-login">
                    <a href="loginpage" className="login-start">Start Now</a>
                </div>
            </section>
        </header>
    )
}