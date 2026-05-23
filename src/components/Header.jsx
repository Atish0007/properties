import { useEffect, useState } from "react";
import "../assets/css/header.css";
import logo from "../assets/images/logo.png";

function Header({ openForm }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Menu Scroll 
  // const scrollToSection = (id) => {

  //     document.getElementById(id).scrollIntoView({
  //         behavior: "smooth"
  //     });

  //     setOpen(false);

  //     // close bootstrap menu
  //     const menu = document.getElementById("nav");
  //     if (menu.classList.contains("show")) {
  //         menu.classList.remove("show");
  //     }

  // };

      const scrollToSection = (id) => {

        document.getElementById(id).scrollIntoView({
          behavior: "smooth"
        });

        // navbar close after click
        const navbarCollapse = document.getElementById("nav");

        if (navbarCollapse.classList.contains("show")) {

          // toggler button select
          const toggler = document.querySelector(".navbar-toggler");

          // auto click toggler
          toggler.click();
        }

      };


  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        <a className="navbar-brand logo" href="#">
          <img src={logo} width="50" height="auto" alt="" className="logoImg" />
          {/* मनातले <span>घर</span> */}
        </a>

        {/* <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          ☰
        </button> */}

        {/* Toggle */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span></span>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("overview")}>Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("plans")}>Plans</a></li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("amenities")}>Amenities</a>
            </li>
            {/* <li className="nav-item"><a className="nav-link" onClick={()=> scrollToSection("gallery")}>Gallery</a></li> */}
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("location")}>Location</a></li>
          </ul>

          <button className="btn premium-btn" onClick={() => openForm("Enquiry Form")}>
            Enquire Now
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Header;