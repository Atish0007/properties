import "../assets/css/about.css";
import about from "../assets/images/about.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content">

              <h2>
                Welcome To <span className="headingText">BramhaCorp</span>
              </h2>

              <p>
                BramhaCorp in Bavdhan, Pune is a nature-inspired township
                that redefines luxury through sustainable and wellness-driven design.
                Sprawling across 34+ acres, this landmark development offers beautifully
                planned residences with elegant G+20 storey architecture.
              </p>

              <p>
                Every home is crafted to maximize cross ventilation, sunlight,
                and a sense of open space — blending functionality with aesthetic brilliance.
                With thoughtfully designed layouts and a wide range of options,
                it caters to modern urban living.
              </p>

              <button className="btn premium-btn">
                Download Brochure
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="about-image">
              <img
                src={about}
                alt="about"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;