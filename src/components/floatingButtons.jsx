import "../assets/css/floatingButtons.css";


function FloatingButtons() {
  return (
    <div className="floating-wrapper">

      {/* CALL */}
      <a href="tel:+919876543210" className="floating-btn call">
        <i className="fas fa-phone"></i>
        <span className="label">Call Now</span>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="label">WhatsApp</span>
      </a>

    </div>
  );
}

export default FloatingButtons;