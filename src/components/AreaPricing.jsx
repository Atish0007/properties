import React from "react";
import "../assets/css/areapricing.css";

const AreaPricing = ({ openForm }) => {
    return (
        <div className="ap-section">
            <div className="container">
                <h3 className="ap-title">Area & Pricing</h3>

                <div className="ap-grid">

                    {/* CARD 1 */}
                    <div className="ap-card">
                        <h4>2 BHK</h4>
                        <p>765 - 818 sq.ft.</p>
                        <h5>₹ 79 Lacs* Onwards</h5>

                        <button
                            className="cstshine"
                            onClick={() => openForm("Area & Pricing")}
                        >
                            Express Your Interest
                        </button>
                    </div>

                    {/* CARD 2 */}
                    <div className="ap-card">
                        <h4>2.5 BHK</h4>
                        <p>932 sq.ft.</p>
                        <h5>₹ 97 Lacs* Onwards</h5>

                        <button
                            className="cstshine"
                            onClick={() => openForm("Area & Pricing")}
                        >
                            Express Your Interest
                        </button>
                    </div>

                    {/* CARD 3 */}
                    <div className="ap-card">
                        <h4>3 BHK</h4>
                        <p>1000 sq.ft.</p>
                        <h5>₹ 1 Cr* Onwards</h5>

                        <button
                            className="cstshine"
                            onClick={() => openForm("Area & Pricing")}
                        >
                            Express Your Interest
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AreaPricing;