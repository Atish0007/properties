import React from "react";
import "../assets/css/projectinfo.css";
// Import barcode image (change path as per your project)
import barcodeImage from "../assets/images/barcode.png";  // 👈 replace with your actual barcode image

const ProjectInfo = () => {
    return (
        <section className="project-info">
            <div className="container">
                {/* RERA Section – Centered like a barcode card */}
                <div className="rera-centered">
                    <div className="rera-card">

                        {/* Barcode image – centered below the text */}
                        <div className="barcode-wrapper">
                            <img
                                src={barcodeImage}
                                alt="MahaRERA Barcode"
                                className="barcode-img"
                            />
                        </div>

                        <p className="rera-line">
                            <strong>Agent MahaRERA No.</strong> – A011262500839
                        </p>
                        <p className="rera-line">
                            <strong>Project MahaRERA No.</strong> – P52100048742 &nbsp;
                            <a
                                href="https://maharera.maharashtra.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (https://maharera.maharashtra.gov.in/)
                            </a>
                        </p>

                    </div>
                </div>

                {/* Disclaimer */}
                <div className="disclaimer-text">
                    <p>
                        <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized affiliate partner / real estate agent (for multiple real estate developers) namely Propace Realty. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Maharashtra Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="info-footer">
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div className="copyright">
                        All Rights Reserved. © 2026 Bramha<span className="headingText">Corp</span>.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;