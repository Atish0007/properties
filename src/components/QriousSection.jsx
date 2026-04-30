import React from "react";
import "../assets/css/qrioussection.css";

const QriousSection = () => {
    return (
        <section className="qrious-sec">

            <h2 className="headingFontSize text-center">Elevated Living at Life Republic Qrious</h2>
            <div className="bar mb-5">
                <div className="bar-fill"></div>
            </div>

            <div className="container qrious-wrapper">

                {/* LEFT BLACK CARD */}
                <div className="qrious-left">
                    <div className="qrious-card">
                        <p>3 BHK Spacious Homes<br />at ₹ 1.15 Cr* Onwards</p>
                        <div className="qrious-divider"></div>

                        <p>40:40:20 Payment Plan<br />Limited Time Inventory Offer</p>
                        <div className="qrious-divider"></div>

                        {/* <p>Spread Across 7.58 Acres<br />5 High-speed Lifts</p>
            <div className="qrious-divider"></div> */}

                        <p>Book New Launch Projects<br />at Pre-Launch Price</p>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="qrious-right">
                    <h2 className="qrious-title">
                        Kolte Patil Life Republic Qrious
                    </h2>

                    <p className="qrious-desc">
                        Qrious – Phase 2 offers thoughtfully designed 3 BHK homes where
                        space, greenery, and lifestyle come together effortlessly.
                        Surrounded by lush landscapes and enriched with 50+ amenities,
                        every detail is crafted to help you relax, unwind, and live better every day.
                    </p>

                    <button className="qrious-btn cstshine">
                        Get Price & Payment Plan
                    </button>
                </div>

            </div>
        </section>
    );
};

export default QriousSection;