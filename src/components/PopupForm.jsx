import "../assets/css/popupForm.css";

function PopupForm({ isOpen, onClose }) {
    return (
        <div
            className={`popup-overlay ${isOpen ? "show" : ""}`}
            onClick={onClose}
        >
            <div
                className={`popup-form ${isOpen ? "open" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >

                <button className="close-btn" onClick={onClose}>✕</button>

                <h4>Book a Free Site Visit</h4>

                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Mobile Number" />
                <input type="email" placeholder="Email Address" />

                <div className="radio-group">
                    <label><input type="radio" name="bhk" /> 2 BHK</label>
                    <label><input type="radio" name="bhk" /> 3 BHK</label>
                </div>

                <button className="submit-btn btn premium-btn">
                    GET DETAILS →
                </button>
            </div>
        </div>
    );
}

export default PopupForm;