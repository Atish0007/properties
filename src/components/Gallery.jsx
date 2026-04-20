import { useState, useEffect, useRef, useCallback } from "react";
import "../assets/css/gallery.css";

const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&auto=format"
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);
    const touchStartX = useRef(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        resetAutoScroll();
    };

    const resetAutoScroll = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (isPlaying) {
            intervalRef.current = setInterval(nextSlide, 4000);
        }
    }, [isPlaying, nextSlide]);

    useEffect(() => {
        resetAutoScroll();
        return () => clearInterval(intervalRef.current);
    }, [resetAutoScroll]);

    const toggleAutoPlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) resetAutoScroll();
        else clearInterval(intervalRef.current);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (lightboxOpen) {
                if (e.key === "Escape") setLightboxOpen(false);
                if (e.key === "ArrowLeft") {
                    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
                }
                if (e.key === "ArrowRight") {
                    setLightboxIndex((prev) => (prev + 1) % images.length);
                }
            } else {
                if (e.key === "ArrowLeft") prevSlide();
                if (e.key === "ArrowRight") nextSlide();
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, prevSlide, nextSlide]);

    // Touch swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(diff) > 50) {
            diff > 0 ? prevSlide() : nextSlide();
        }
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section className="gallery-section" id="gallery">
            <div className="container">
                <div className="gallery-header">
                    <h2 className="gallery-title mb-0 headingFontSize">Our <span className="headingText">Gallery</span></h2>
                    <div className="bar mt-0">
                        <div className="bar-fill"></div>
                    </div>
                    {/* <button className="autoplay-btn" onClick={toggleAutoPlay}>
                        {isPlaying ? "⏸" : "▶"}
                    </button> */}
                </div>

                {/* Main Carousel */}
                <div
                    className="carousel"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button className="nav-btn prev" onClick={prevSlide}>
                        ‹
                    </button>

                    <div className="carousel-track">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`carousel-slide ${i === currentIndex ? "active" : ""}`}
                                onClick={() => openLightbox(i)}
                            >
                                <img src={img} alt={`Slide ${i + 1}`} loading="lazy" />
                                <div className="overlay">🔍</div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn next" onClick={nextSlide}>
                        ›
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="thumbnails">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`thumb ${i === currentIndex ? "active" : ""}`}
                            onClick={() => goToSlide(i)}
                        >
                            <img src={img} alt={`Thumb ${i + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {lightboxOpen && (
                    <div className="lightbox" onClick={() => setLightboxOpen(false)}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-lightbox" onClick={() => setLightboxOpen(false)}>
                                ✕
                            </button>
                            <img src={images[lightboxIndex]} alt="Lightbox" />
                            <button
                                className="lightbox-nav prev"
                                onClick={() =>
                                    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
                                }
                            >
                                ‹
                            </button>
                            <button
                                className="lightbox-nav next"
                                onClick={() =>
                                    setLightboxIndex((prev) => (prev + 1) % images.length)
                                }
                            >
                                ›
                            </button>
                            <div className="lightbox-counter">
                                {lightboxIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}