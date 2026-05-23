// Hero.jsx
import "../assets/css/hero.css";
import heroImg from "../assets/images/hero.png";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaHome, FaMapMarkerAlt, FaShieldAlt, FaLeaf } from "react-icons/fa";

import mobileHeroImg from "../assets/images/hero-mob.png";

function Hero({ openForm }) {
    return (
        <>

            <section className="hero desktop-hero">
                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <div className="row align-items-center">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-8 text-white">
                            {/* Premium Badge */}
                            <div className="premium-badge">
                                <span className="fw-bold">✦ PREMIUM LIVING ✦</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="hero-title logoFont">
                                मनातले <span className="logoFont">घर</span>
                            </h1>

                            {/* Tagline as per image reference */}
                            <p className="hero-tagline">
                                हे फक्त घर नाही, तुमच्या lifestyle ची ओळख आहे.
                            </p>

                            {/* CTA Buttons */}
                            <div className="hero-buttons">
                                <button
                                    className="btn btn-price fw-bold priceMobBtn"
                                    onClick={() => openForm("Get Price")}
                                >
                                    Get Price <IoMdArrowRoundForward className="fs-5" />
                                </button>
                                <button className="btn btn-outline-success fw-bold cstshine exploreMobBtn">
                                    <FaRegCirclePlay className="fs-5 me-1" /> Explore Project
                                </button>
                            </div>

                            {/* Features Row: Premium Homes, Prime Location, Trusted Developer, Eco-Friendly Living */}
                            <div className="hero-features">
                                <div className="feature-item">
                                    <div className="feature-icon"><FaHome /></div>
                                    <div className="feature-text">Premium Homes</div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><FaMapMarkerAlt /></div>
                                    <div className="feature-text">Prime Location</div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><FaShieldAlt /></div>
                                    <div className="feature-text">Trusted Developer</div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><FaLeaf /></div>
                                    <div className="feature-text">Eco-Friendly Living</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="mobile-hero-section">
                <img
                    src={mobileHeroImg}
                    alt="Hero"
                    className="mobile-hero-image"
                />

                <div className="hero-features container">
                    <div className="feature-item">
                        <div className="feature-icon"><FaHome /></div>
                        <div className="feature-text">Premium Homes</div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaMapMarkerAlt /></div>
                        <div className="feature-text">Prime Location</div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaShieldAlt /></div>
                        <div className="feature-text">Trusted Developer</div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaLeaf /></div>
                        <div className="feature-text">Eco-Friendly Living</div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Hero;