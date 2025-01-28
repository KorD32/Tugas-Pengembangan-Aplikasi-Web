import React, { useState, useEffect } from "react";
import { HeaderDesktop } from "../component/HeaderDesktop";
import EdukasiCard from "../molecules/EdukasiCard";
import "../style/edukasi.css";
import axios from "axios";

const Edukasi = () => {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // "" = semua kategori

    useEffect(() => {
        fetchArticles(selectedCategory);
    }, [selectedCategory]);

    const fetchArticles = async (category) => {
        try {
            const response = await axios.get(`http://localhost:3000/web/articles`, {
                params: { category: category || undefined }
            });
            setArticles(response.data.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    return (
        <div className="edukasi">
            <header>
                <HeaderDesktop />
            </header>
            <main className="body-edukasi">
                <section className="container-edukasi">
                    <div className="edukasi-title">
                        <h1>Edukasi</h1>
                        <p>Temukan bahan-bahan, perdalam pengetahuan tentang perawatan kulit, dan banyak lagi.</p>
                    </div>
                    <section className="navigasi">
                        <div className="navigasi-list">
                            <div className="navigasi-item">
                                <h2 className={`skin-care ${selectedCategory === "skincare" ? "active" : ""}`} onClick={() => setSelectedCategory("skincare")}>
                                    Skincare
                                </h2>
                                <h2 className={`hair-care ${selectedCategory === "haircare" ? "active" : ""}`} onClick={() => setSelectedCategory("haircare")}>
                                    Haircare
                                </h2>
                                <h2 className={`fashion ${selectedCategory === "fashion" ? "active" : ""}`} onClick={() => setSelectedCategory("fashion")}>
                                    Fashion
                                </h2>
                                <h2 className={`all ${selectedCategory === "" ? "active" : ""}`} onClick={() => setSelectedCategory("")}>
                                    Semua
                                </h2>
                            </div>
                        </div>
                    </section>

                    <div className="artikel-list">
                        {articles.length > 0 ? (
                            articles.map((article) => <EdukasiCard key={article.id} article={article} />)
                        ) : (
                            <p className="no-articles">Tidak ada artikel dalam kategori ini.</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Edukasi;