import React from "react";
import "../assets/css/overview.css";
import overview from "../assets/images/overview.jpg";
import { FaHome, FaRupeeSign } from "react-icons/fa";

const Overview = () => {
    return (
        <section className="overview-section" id="overview">
            <div className="container">

                {/* Heading */}
                <div className="overview-header">
                    <h2 className="headingFontSize">Project <span className="headingText">Overview</span> </h2>
                    {/* <div className="underline"></div> */}
                    <div className="bar">
                        <div className="bar-fill"></div>
                    </div>
                    <p>
                        Welcome to BramhaCorp — where limitless living meets comfort,
                        luxury, and community.
                    </p>
                </div>

                {/* Content */}
                <div className="overview-content">

                    {/* Image */}
                    <div className="overview-image">
                        <img
                            src={overview}
                            alt="BramhaCorp"
                        />
                    </div>

                    {/* Text */}
                    <div className="overview-text">
                        <p>
                            BramhaCorp in Baner, Pune is a premium residential project
                            crafted for those seeking a calm, scenic lifestyle. Located in one
                            of Pune's most sought-after neighbourhoods, the development offers
                            excellent connectivity to major IT hubs, schools, hospitals, and
                            expressways.
                        </p>

                        <p>
                            The homes are thoughtfully designed with spacious layouts,
                            contemporary finishes, and large windows that bring in natural
                            light. Residents enjoy landscaped gardens, leisure zones, fitness
                            spaces, and community areas — a perfect blend of nature and comfort.
                        </p>

                        {/* Cards */}
                        <div className="ocards-wrapper">

                            <div className="ocards-item">
                                <div className="ocards-top">
                                    <div className="ocards-icon">
                                        <FaHome />
                                    </div>
                                    <span className="ocards-label">UNIT TYPE</span>
                                </div>
                                <h3 className="ocards-value">2 & 3 BHK Luxury</h3>
                            </div>

                            <div className="ocards-item">
                                <div className="ocards-top">
                                    <div className="ocards-icon">
                                        <FaRupeeSign />
                                    </div>
                                    <span className="ocards-label">PRICE RANGE</span>
                                </div>
                                <h3 className="ocards-value price">₹1.20 Cr* onwards</h3>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Overview;