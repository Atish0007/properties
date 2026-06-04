import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import axios from "axios";
import "../assets/css/commonForm.css";

import { FaCheckCircle } from "react-icons/fa";

const CommonForm = ({ isOpen, onClose, title, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // if (!isOpen) return null;
    if (!isOpen && !showToast) return null;

    //  VALIDATION
    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name required";
        }

        if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Enter valid 10-digit number";
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter valid email";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const updated = { ...formData, [e.target.name]: e.target.value };
        setFormData(updated);
        setErrors({ ...errors, [e.target.name]: "" });
    };

    // SUBMIT
    //     const handleSubmit = (e) => {
    //         e.preventDefault();

    //         if (!validate()) return;

    //         setIsSubmitting(true);

    //         emailjs
    //             .send(
    //                 "",
    //                 "",
    //                 {
    //                     user_name: formData.name,
    //                     user_phone: formData.phone,
    //                     user_email: formData.email,
    //                     source: title || "Website",
    //                 },
    //                 ""
    //             )
    //             .then(() => {
    //                 setShowToast(true);

    //                 if (onSuccess) {
    //                     onSuccess(); // success form
    //                 }

    //                 // WhatsApp redirect
    // //                 const phoneNumber = "919766096925";
    // //                 const message = `Hello, I am interested in ${title}.
    // // Name: ${formData.name}
    // // Phone: ${formData.phone}`;

    // //                 const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // //                 setTimeout(() => {
    // //                     window.open(url, "_blank");
    // //                 }, 1200);

    //                 setTimeout(() => {
    //                     setShowToast(false);
    //                     onClose();
    //                 }, 2500);

    //                 setFormData({ name: "", phone: "", email: "" });
    //             })
    //             .catch(() => {
    //                 alert("Error sending form");
    //             })
    //             .finally(() => {
    //                 setIsSubmitting(false);
    //             });
    //     };


    // get too much time to sent email

    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     if (!validate()) return;

    //     setIsSubmitting(true);

    //     try {

    //         await axios.post(
    //             "http://localhost/properties_api/send-mail.php",
    //             {
    //                 name: formData.name,
    //                 phone: formData.phone,
    //                 email: formData.email,
    //                 source: title || "Website",
    //             }
    //         );


    //         if (onSuccess) {
    //             onSuccess();
    //         }

    //         onClose(); // form immediately close
    //         setShowToast(true);

    //         setTimeout(() => {

    //             setShowToast(false);

    //             onClose();

    //         }, 2500);

    //         setFormData({
    //             name: "",
    //             phone: "",
    //             email: "",
    //         });

    //     } catch (error) {

    //         alert("Error sending form");

    //     } finally {

    //         setIsSubmitting(false);

    //     }
    // };

    // Fast
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // instant UI response
        // if (onSuccess) {
        //     onSuccess();
        // }

        // onClose();

        // setShowToast(true);

        if (onSuccess) {
            onSuccess();
        }

        onClose(); // instantly close modal

        setShowToast(true);

        setTimeout(() => {

            setShowToast(false);

        }, 3500);

        try {

            await axios.post(
                //"http://localhost/properties_api/send-mail.php",
                "https://koltepatilthewind.com/api/send-mail.php",
                {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    source: title || "Website",
                }
            );

        } catch (error) {

            alert("Error sending form");

        } finally {

            setIsSubmitting(false);

            // setTimeout(() => {
            //     setShowToast(false);
            // }, 2500);

            setFormData({
                name: "",
                phone: "",
                email: "",
            });
        }
    };


    return (
        <>
            {isOpen && (
        <div className="cf-modal" onClick={onClose}>
                <div className="cf-box" onClick={(e) => e.stopPropagation()}>

                    <span className="cf-close" onClick={onClose}>✕</span>

                    <h3>{title || "Enquiry Form"}</h3>

                    <form onSubmit={handleSubmit} noValidate>

                        <input
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "cf-error" : ""}
                        />
                        {errors.name && <span className="cf-error-text">{errors.name}</span>}

                        <input
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) e.preventDefault();
                            }}
                            className={errors.phone ? "cf-error" : ""}
                        />
                        {errors.phone && <span className="cf-error-text">{errors.phone}</span>}

                        <input
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "cf-error" : ""}
                        />
                        {errors.email && <span className="cf-error-text">{errors.email}</span>}

                        {/* <button type="submit" disabled={isSubmitting} className="cstshine" style={{ "position": "relative", "overflow": "hidden" }}>
                            {isSubmitting ? <span className="cf-loader"></span> : "Submit"}
                        </button> */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cstshine"
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                opacity: isSubmitting ? "0.7" : "1",
                                cursor: isSubmitting ? "not-allowed" : "pointer"
                            }}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>

                    </form>

                </div>
            </div>
)}
            {/* TOAST */}
            {showToast && (
                <div className="cf-toast">
                    <FaCheckCircle className="text-warning fs-2" /> Thank you for enquiry. Our team will contact you shortly.
                </div>
            )}
            
        </>
    );
};

export default CommonForm;