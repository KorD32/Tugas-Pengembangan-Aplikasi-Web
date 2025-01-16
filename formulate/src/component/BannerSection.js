import { useState, useEffect } from "react";
import Banner from "../data/Banner";
import { BannerCard } from "../molecules/BannerCard";
import "../style/banner.css";

export const ListBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Banner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="banner-section" id="banner">
      <div className="banner-slider">
        {Banner.map((banner, index) => (
          <div
            key={banner.id}
            className={`banner-slide ${index === currentIndex ? "active" : "inactive"}`}
          >
            <BannerCard cover={banner.cover} />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="banner-dots">
        {Banner.map((_, index) => (
          <div
            key={index}
            className={`banner-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};
