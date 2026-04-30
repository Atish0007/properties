import "../assets/css/hero.css";
import heroImg from "../assets/images/hero.png";
import { FaCheckCircle } from "react-icons/fa";

function Hero( {openForm} ) {
    return (
        <section
            className="hero"
        // style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="row align-items-center">

                    {/* LEFT */}
                    <div className="col-lg-7 text-white">
                        {/* <p className="badge-text">NEAR POSSESSION DEC 2026</p> */}

                        <h1 className="hero-title logoFont">
                            मनातले <span className="logoFont"> घर</span>
                        </h1>

                        {/* <p className="hero-sub">Premium Living in Baner, Pune</p>

                        <div className="stats d-grid">
                            <div className="stat">
                                <span className="icon"><FaCheckCircle /></span>
                                <div>
                                    <small>UNIT TYPES</small>
                                    <h6>2 & 3 BHK</h6>
                                </div>
                            </div>

                            <div className="stat">
                                <span className="icon"><FaCheckCircle /></span>
                                <div>
                                    <small>AREA</small>
                                    <h6>838–1213 Sq.Ft.</h6>
                                </div>
                            </div>

                            <div className="stat">
                                <span className="icon"><FaCheckCircle /></span>
                                <div>
                                    <small>PRICE</small>
                                    <h6>₹1.20 Cr*</h6>
                                </div>
                            </div>
                        </div> */}

                        <div className="hero-buttons">
                            <button className="btn btn-price fw-bold" onClick={()=>openForm ("Get Price")}>Get Price</button>
                            <button className="btn btn-outline-light fw-bold">Explore</button>
                        </div>
                    </div>

                    {/* RIGHT FORM (SMALLER) */}
                    {/* <div className="col-lg-5 mt-4 mt-lg-0">
                        <div className="hero-form">
                            <h5>Get Instant Details</h5>

                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Mobile Number" />
                            <input type="email" placeholder="Email Address" />

                            <div className="radio-group">
                                <label><input type="radio" name="bhk" /> 2 BHK</label>
                                <label><input type="radio" name="bhk" /> 3 BHK</label>
                            </div>

                            <button className="hero-submit">
                                Get Price Breakup →
                            </button>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}

export default Hero;