import React from "react";

export const BannerCard = (props) => {
    return (
        <div className="banner-card">
            <img src={props.cover ?? "not-available.jpeg"} alt="banner iklan kecantikkan" />
        </div>
    );
};
