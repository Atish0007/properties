import React from "react";
import "../assets/css/approvedBanks.css";

// Import bank images
import hdfc from "../assets/images/banks/hdfc.png";
import icici from "../assets/images/banks/icici.png";
import sbi from "../assets/images/banks/sbi.png";
import axis from "../assets/images/banks/axis.png";
import kotak from "../assets/images/banks/kotak.png";

const banks = [
    { id: 1, name: "HDFC Bank", image: hdfc },
    { id: 2, name: "ICICI Bank", image: icici },
    { id: 3, name: "SBI Bank", image: sbi },
    { id: 4, name: "Axis Bank", image: axis },
    { id: 5, name: "Kotak Bank", image: kotak },
];

const ApprovedBanks = () => {
    return (
        <section className="approved-section">
            <div className="container">

                <div className="approved-header">
                    <h2 className="headingFontSize text-center">Project Approved By</h2>
                    <div className="bar">
                        <div className="bar-fill"></div>
                    </div>
                </div>

                {/* AUTO SLIDER */}
                <div className="slider-wrapper">
                    <div className="slider-track">

                        {/* First Set */}
                        {banks.map((bank) => (
                            <div className="bank-card" key={bank.id}>
                                <img src={bank.image} alt={bank.name} />
                            </div>
                        ))}

                        {/* Duplicate Set For Infinite Loop */}
                        {banks.map((bank) => (
                            <div className="bank-card" key={`duplicate-${bank.id}`}>
                                <img src={bank.image} alt={bank.name} />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ApprovedBanks;