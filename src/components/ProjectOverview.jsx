import React from "react";
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

const ProjectOverview = () => {
    return (
        <section className="po-wrapper">

            <div className="container">

                {/* TOP SECTION */}
                <div className="po-top">

                    {/* LEFT CONTENT */}
                    <div className="po-left">
                        <h2 className="po-heading headingFontSize">Life Republic Qrious</h2>

                        <p className="po-description text-justify">
                            Kolte Patil QRIOUS at Life Republic, Hinjewadi is a premium 7.58-acre residential development designed for modern,
                            connected living. Featuring five elegant towers with 25/26 floors, each floor offers eight well-planned homes supported by high-speed lifts for seamless access.
                            Set within the expansive Life Republic township by Kolte Patil Developers, it offers wide internal roads, green landscapes, top schools, essential facilities,
                            and excellent connectivity to Pune’s IT and business hubs. Blending contemporary architecture with smart features and thoughtful planning, QRIOUS creates a complete
                            lifestyle destination where innovation, comfort, and convenience come together for an elevated urban living experience.
                        </p>

                        <button className="po-brochure-btn cstshine">
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
                <div className="po-pricing-section">
                    <h3 className="po-pricing-title">Area & Pricing</h3>

                    <div className="po-pricing-grid">

                        {/* CARD 1 */}
                        <div className="po-price-card">
                            <h4>2 BHK Large</h4>
                            <p>813 - 900 sq.ft.</p>
                            <h5>₹ 84 Lacs* Onwards</h5>
                            <button className="cstshine">Express Your Interest</button>
                        </div>

                        {/* CARD 2 */}
                        <div className="po-price-card">
                            <h4>3 BHK Large</h4>
                            <p>1116 - 1231 sq.ft.</p>
                            <h5>₹ 1.13 Cr* Onwards</h5>
                            <button className="cstshine">Express Your Interest</button>
                        </div>

                    </div>
                </div>

                {/* ================= OVERVIEW STATS ================= */}
                <div className="po-stats-wrapper">

                    {/* HEADER */}
                    <div className="po-stats-header">
                        <h3>Overview</h3>
                        <button className="po-stats-btn cstshine">Brochure <IoMdDownload /></button>
                    </div>

                    {/* GRID */}
                    <div className="po-stats-grid">

                        <div className="po-stat-card">
                            <FaRulerCombined />
                            <div>
                                <h4>8 acres</h4>
                                <p>Land Parcel</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <GiTowerBridge />
                            <div>
                                <h4>8</h4>
                                <p>Towers</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <FaLayerGroup />
                            <div>
                                <h4>B+G+22</h4>
                                <p>Floors</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <MdApartment />
                            <div>
                                <h4>2, 3 BHK</h4>
                                <p>Config</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <MdOutlineMeetingRoom />
                            <div>
                                <h4>870-1230</h4>
                                <p>Carpet Area</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <HiOutlineDocumentText />
                            <div>
                                <h4>P521000...</h4>
                                <p>RERA No.</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <FaBuilding />
                            <div>
                                <h4>Ready</h4>
                                <p>Possession</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <BsCalendarCheck />
                            <div>
                                <h4>Jun 2024</h4>
                                <p>Target Poss.</p>
                            </div>
                        </div>

                        <div className="po-stat-card">
                            <LuFileCheck />
                            <div>
                                <h4 className="po-badge-green">Ready</h4>
                                <p>RERA Poss.</p>
                            </div>
                        </div>

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