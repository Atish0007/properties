import React from "react";
import "../assets/css/aboutDeveloper.css";

// Developer Logo
import developerLogo from "../assets/images/developer/kolte-patil.png";

const locations = [
    "Bangalore Rural",
    "Bangalore Urban",
    "Mumbai City",
    "Pune",
    "Mumbai Suburban",
];

const AboutDeveloper = () => {
    return (
        <section className="developer-section">
            <div className="container">

                {/* HEADER */}
                <div className="developer-header">
                    <h2 className="headingFontSize text-center">About Kolte Patil Developers</h2>

                    <div className="bar">
                        <div className="bar-fill"></div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="developer-content">

                    {/* LEFT SIDE */}
                    <div className="developer-left">

                        <h3 className="text-center">Kolte Patil Developers</h3>

                        <div className="developer-image-card">
                            <img src={developerLogo} alt="Kolte Patil Developers" />
                        </div>



                    </div>

                    {/* RIGHT SIDE */}
                    <div className="developer-right">

                        <h3 className="text-center">Locations</h3>



                        {/* DESCRIPTION */}
                        <div className="developer-description text-justify">
                            <p>
                                Kolte Patil Developers is one of India's leading real estate
                                brands known for premium residential and commercial projects.
                                With decades of trust, innovation, and quality construction,
                                the company has delivered landmark developments across multiple cities.
                            </p>
                        </div>

                        <div className="location-wrapper mt-3">

                            {locations.map((location, index) => (
                                <div className="location-pill" key={index}>
                                    {location}
                                </div>
                            ))}

                        </div>

                    </div>

                </div>


                {/* STATS */}
                <div className="developer-stats">

                    <div className="stat-card">
                        <span>Experience:</span>
                        <h4>34 Years</h4>
                    </div>

                    <div className="stat-card">
                        <span>Total Projects:</span>
                        <h4>64</h4>
                    </div>

                    {/* <div className="stat-card">
                        <span>Happy Families:</span>
                        <h4>100K+</h4>
                    </div> */}

                </div>


            </div>
        </section>
    );
};

export default AboutDeveloper;