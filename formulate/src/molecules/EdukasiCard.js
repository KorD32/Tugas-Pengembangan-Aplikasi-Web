import React from "react";
import "../style/edukasicard.css";

const EdukasiCard = ({ article }) => {
    return (
        <div className="edukasi-card">
            <img src={article.image_url} alt={article.title} className="edukasi-card-image" />
            <div className="edukasi-card-content">
                <p className="edukasi-category">{article.category.toUpperCase()} Education</p>
                <h3 className="artikel-title">{article.title}</h3>
                <p className="edukasi-author">Oleh: {article.author}</p>
                <p className="edukasi-readmore">Selengkapnya</p>
            </div>
        </div>
    );
};

export default EdukasiCard;