import { useState } from "react";
import "../assets/css/popupForm.css";
import { FaCheckCircle } from "react-icons/fa";

function PopupForm({ isOpen, onClose }) {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // TOAST STATE
    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success"
    });

    const showToastMessage = (message, type = "success") => {
        setToast({
            show: true,
            message,
            type
        });

        setTimeout(() => {
            setToast({
                show: false,
                message: "",
                type: "success"
            });
        }, 2500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = "Full name is required";
        } else if (formData.name.trim().length < 3) {
            tempErrors.name = "Name must be at least 3 characters";
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone) {
            tempErrors.phone = "Mobile number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            tempErrors.phone = "Enter valid 10-digit mobile number";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Enter valid email address";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async () => {

        if (!validate()) return;

        try {
            setLoading(true);

            const res = await fetch("http://localhost/properties_api/send-mail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    source: "Book a Free Site Visit"
                })
            });

            const data = await res.json();

            if (data.success) {

                showToastMessage("Submitted Successfully", "success");

                setFormData({
                    name: "",
                    phone: "",
                    email: ""
                });

                setErrors({});
                onClose();

            } else {
                showToastMessage(data.message || "Failed to send enquiry", "error");
            }

        } catch (error) {
            console.log(error);
            showToastMessage("Something went wrong", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
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

                    {/* NAME */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}

                    {/* PHONE */}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) e.preventDefault();
                        }}
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}

                    {/* EMAIL */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    {/* SUBMIT */}
                    <button
                        className="submit-btn btn premium-btn"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "GET DETAILS →"}
                    </button>

                </div>
            </div>

            {/* TOAST UI */}
            {toast.show && (
                <div className={`pf-toast ${toast.type}`}>
                    <FaCheckCircle />
                    <span>{toast.message}</span>
                </div>
            )}
        </>
    );
}

export default PopupForm;



// import "../assets/css/popupForm.css";

// function PopupForm({ isOpen, onClose }) {
//     return (
//         <div
//             className={`popup-overlay ${isOpen ? "show" : ""}`}
//             onClick={onClose}
//         >
//             <div
//                 className={`popup-form ${isOpen ? "open" : ""}`}
//                 onClick={(e) => e.stopPropagation()}
//             >

//                 <button className="close-btn" onClick={onClose}>✕</button>

//                 <h4>Book a Free Site Visit</h4>

//                 <input type="text" placeholder="Full Name" />
//                 <input type="text" placeholder="Mobile Number" />
//                 <input type="email" placeholder="Email Address" />

//                 {/* <div className="radio-group">
//                     <label><input type="radio" name="bhk" /> 2 BHK</label>
//                     <label><input type="radio" name="bhk" /> 3 BHK</label>
//                 </div> */}

//                 <button className="submit-btn btn premium-btn">
//                     GET DETAILS →
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default PopupForm;