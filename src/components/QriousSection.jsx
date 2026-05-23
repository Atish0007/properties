import React, { useState } from "react";
import "../assets/css/qrioussection.css";

const QriousSection = ({ openForm }) => {

    const [showMore, setShowMore] = useState(false);

    return (
        <section className="qrious-sec" id="about">

            <h2 className="headingFontSize text-center">Elevated Living at Life the winds Qrious</h2>
            <div className="bar mb-md-5 mb-4">
                <div className="bar-fill"></div>
            </div>

            <div className="container qrious-wrapper">

                {/* LEFT BLACK CARD */}
                <div className="qrious-left">
                    <div className="qrious-card">
                        {/* <p>3 BHK Spacious Homes<br />at ₹ 1.15 Cr* Onwards</p> */}
                        {/* <div className="qrious-divider"></div>

                        <p>40:40:20 Payment Plan<br />Limited Time Inventory Offer</p>
                        <div className="qrious-divider"></div> */}

                        {/* <p>Spread Across 7.58 Acres<br />5 High-speed Lifts</p>
            <div className="qrious-divider"></div> */}
                        <p>₹ 3 Lakh<br />Avail Special Launch Day Price + Get Unit Choice</p>
                        <div className="qrious-divider"></div>
                        <p>Book New Launch Projects<br />at Pre-Launch Price</p>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="qrious-right">
                    <h2 className="qrious-title">
                        Kolte Patil Life the winds Qrious
                    </h2>
                    <div className="po-description-wrapper">
                        <p className="qrious-desc">
                            Experience elevated living in the heart of Bhugaon with a landmark residential address crafted for those who seek exclusivity, sophistication, and long-term value. Surrounded by serene hills and lush landscapes, this premium development blends contemporary architecture with thoughtfully curated lifestyle experiences, creating a refined sanctuary away from the city’s chaos while remaining exceptionally connected to Pune’s prime destinations.
                        </p>

                        <div className={`po-mobile-extra ${showMore ? "show" : ""}`}>
                            <p className="qrious-desc">
                                Designed for discerning homeowners, the project offers spacious 2, 2.5, and 3 BHK residences with elegant layouts, expansive balconies, abundant natural light, and panoramic hill views that redefine modern luxury living. Every detail — from the grand arrival experience and vehicle-free podium to multi-level landscaped spaces and 50+ premium amenities — has been planned to deliver comfort, privacy, and effortless convenience.
                            </p>
                            <p className="qrious-desc">
                                Strategically located near Kothrud, Bavdhan, and the Mumbai–Pune Expressway, the development enjoys seamless access to Pune’s leading IT parks, business districts, reputed schools, luxury retail, and fine dining destinations. Upcoming infrastructure upgrades and enhanced connectivity further position Bhugaon as one of Pune’s most promising luxury investment corridors.
                            </p>
                            <p className="qrious-desc">
                                More than just a residence, this is a lifestyle destination created for modern families who value prestige, wellness, connectivity, and future appreciation. Whether it’s peaceful mornings overlooking green vistas, world-class amenities for recreation and wellness, or the confidence of investing in a rapidly growing location, every aspect of this development is designed to offer an exceptional standard of living.
                            </p>
                        </div>

                        <button
                            className="po-readmore-btn"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <button className="qrious-btn cstshine mt-md-3 mt-2" onClick={() => openForm("Get Price & Payment Plan")}>
                        Get Price & Payment Plan
                    </button>
                </div>

            </div>
        </section>
    );
};

export default QriousSection;