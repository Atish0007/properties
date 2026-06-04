import React, { useState } from "react";
import "../assets/css/projectoverview.css";
import buildingImg from "../assets/images/building.jpg";

import { FaBuilding, FaLayerGroup, FaRulerCombined } from "react-icons/fa";
import { MdApartment, MdOutlineMeetingRoom, MdGavel } from "react-icons/md";
import { GiTowerBridge } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoMdDownload } from "react-icons/io";
import { LuFileCheck } from "react-icons/lu";
//import { Gavel } from "lucide-react";

const ProjectOverview = ({ openForm }) => {

    const [showMore, setShowMore] = useState(false);

    return (
        <section className="po-wrapper" id="overview">

            <div className="container">

                {/* TOP SECTION */}
                <div className="po-top">

                    {/* LEFT CONTENT */}
                    <div className="po-left">
                        <h2 className="po-heading headingFontSize">Kolte Patil the Winds</h2>

                        {/* <p className="po-description text-justify">
                            Kolte-Patil Developers The Wind presents an exclusive collection of luxurious 2, 2.5, 3 & 4 BHK residences thoughtfully crafted for those who seek elegance, space, and a refined lifestyle. Nestled amidst scenic greenery in Bhugaon, the project seamlessly blends contemporary architecture with nature-inspired living, creating a peaceful retreat away from the city rush.
                        </p>
                        <p className="po-description text-justify">
                            Designed with expansive layouts, abundant natural light, premium finishes, and breathtaking views, every home reflects sophistication and comfort in perfect harmony. Surrounded by beautifully landscaped open spaces and over 50+ world-class lifestyle amenities, residents can enjoy everything from wellness and recreation to relaxation and social experiences within one vibrant community.
                        </p>
                        <p className="po-description text-justify">                            
                            Whether it’s serene mornings overlooking lush hills, thoughtfully curated leisure spaces, or seamless connectivity to Pune’s prime locations, The Wind offers a lifestyle where luxury feels effortless and every moment feels elevated. This is more than just a home — it’s a statement of modern living crafted for families who aspire for more.
                        </p> */}

                        <div className="po-description-wrapper">

                            <p className="po-description text-justify">
                                Kolte-Patil Developers The Wind presents an exclusive collection of luxurious 2, 2.5, 3 & 4 BHK residences thoughtfully crafted for those who seek elegance, space, and a refined lifestyle. Nestled amidst scenic greenery in Bhugaon, the project seamlessly blends contemporary architecture with nature-inspired living, creating a peaceful retreat away from the city rush.
                            </p>

                            <div className={`po-mobile-extra ${showMore ? "show" : ""}`}>
                                <p className="po-description text-justify">
                                    Designed with expansive layouts, abundant natural light, premium finishes, and breathtaking views, every home reflects sophistication and comfort in perfect harmony. Surrounded by beautifully landscaped open spaces and over 50+ world-class lifestyle amenities, residents can enjoy everything from wellness and recreation to relaxation and social experiences within one vibrant community.
                                </p>

                                <p className="po-description text-justify">
                                    Whether it’s serene mornings overlooking lush hills, thoughtfully curated leisure spaces, or seamless connectivity to Pune’s prime locations, The Wind offers a lifestyle where luxury feels effortless and every moment feels elevated. This is more than just a home — it’s a statement of modern living crafted for families who aspire for more.
                                </p>
                            </div>

                            <button
                                className="po-readmore-btn"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? "Read Less" : "Read More"}
                            </button>

                        </div>

                        <button className="po-brochure-btn cstshine mt-md-3" onClick={() => openForm("Request Brochure")}>
                            Request Brochure
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="po-right">
                        <img src={buildingImg} alt="project" />
                        <span className="po-tag">Artist Impression</span>
                    </div>

                </div>

                {/* AREA & PRICING */}
                {/* <div className="po-pricing-section">
                    <h3 className="po-pricing-title">Area & Pricing</h3>

                    <div className="po-pricing-grid">

                        <div className="po-price-card">
                            <h4>2 BHK Large</h4>
                            <p>813 - 900 sq.ft.</p>
                            <h5>₹ 84 Lacs* Onwards</h5>
                            <button className="cstshine" onClick={() => openForm("Area & Pricing")}>Express Your Interest</button>
                        </div>

                       
                        <div className="po-price-card">
                            <h4>3 BHK Large</h4>
                            <p>1116 - 1231 sq.ft.</p>
                            <h5>₹ 1.13 Cr* Onwards</h5>
                            <button className="cstshine" onClick={() => openForm("Area & Pricing")}>Express Your Interest</button>
                        </div>

                    </div>
                </div> */}

                {/* ================= OVERVIEW STATS ================= */}
                <div className="po-stats-wrapper">

                    {/* HEADER */}
                    <div className="po-stats-header">
                        <h3>Overview</h3>
                        {/* <button className="po-stats-btn cstshine">Brochure <IoMdDownload /></button> */}
                    </div>

                    {/* GRID */}
                    <div className="po-stats-grid">

                        <div className="po-stat-card">
                            <FaRulerCombined />
                            <div>
                                <h4>12.5 acres</h4>
                                <p>Land Parcel</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <GiTowerBridge />
                            <div>
                                <h4>3</h4>
                                <p>Towers</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <FaLayerGroup />
                            <div>
                                <h4>21</h4>
                                <p>Floors</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <MdApartment />
                            <div>
                                <h4>2, 2.5, 3 BHK</h4>
                                <p>Configuration</p>
                            </div>
                        </div>

                        {/* <div className="po-stat-card">
                            <MdOutlineMeetingRoom />
                            <div>
                                <h4>870-1230</h4>
                                <p>Carpet Area</p>
                            </div>
                        </div> */}

                        <div className="po-stat-card">
                            <HiOutlineDocumentText />
                            <div>
                                <h4>PR1261012600258</h4>
                                <p>RERA No.</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <FaBuilding />
                            <div>
                                <h4>Under</h4>
                                <p>Construction</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <BsCalendarCheck />
                            <div>
                                <h4>Dec 2031</h4>
                                <p>Possession</p>
                            </div>
                        </div>

                        {/* <div className="po-stat-card">
                            <LuFileCheck />
                            <div>
                                <h4 className="po-badge-green">Ready</h4>
                                <p>RERA Poss.</p>
                            </div>
                        </div> */}

                        <div className="po-stat-card">
                            <MdGavel size={20} />
                            <div>
                                <h4 className="po-badge-outline">No</h4>
                                <p>Litigation</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectOverview;