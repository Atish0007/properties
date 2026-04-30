import React, { useState } from "react";
import "../assets/css/plans.css";
import emailjs from "@emailjs/browser";

import masterplan from "../assets/images/plans/masterplan.jpeg";
import unitplan from "../assets/images/plans/unitplan45.jpeg";

const Plans = ({ openForm, unlocked  }) => {
  const [showForm, setShowForm] = useState(false);
  //const [unlocked, setUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  //  VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);

    //  Real-time validation
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    emailjs
      .send(
        "service_s8gqyej",
        "template_tu67rcz",
        {
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        "6Hzlr8ke7bZzeSxxj"
      )
      .then(() => {
        //setUnlocked(true);
        setShowForm(false);
        setShowToast(true);

        setTimeout(() => setShowToast(false), 4000);

        const phoneNumber = "919766096925";
        const message = `Hello, I am interested in Plans.
Name: ${formData.name}
Phone: ${formData.phone}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
          window.open(url, "_blank");
        }, 1500);
      })
      .catch(() => {
        alert("Failed to send. Try again!");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleImageClick = (img) => {
    if (!unlocked) {
      openForm("Floor Plans"); //setShowForm(true);
    } else {
      setPreviewImg(img);
    }
  };

  return (
    <section className="pl-sec">
      <div className="container">

        <div className="pl-wrapper">

          <div className="pl-card">
            <h4 className="pl-title fw-bold">Master Plan Layout</h4>

            <div
              className={`pl-img-box ${!unlocked ? "pl-blur" : ""}`}
              onClick={() => handleImageClick(masterplan)}
            >
              <span className="cta-text" style={{ display: !unlocked ? "block" : "none" }}>Request Master Plan Layout</span>
              <img src={masterplan} alt="Master Plan" />

              {!unlocked && (
                <div className="pl-overlay">
                  <button>Request Master Plan Layout</button>
                </div>
              )}
            </div>
          </div>

          <div className="pl-card">
            <h4 className="pl-title fw-bold">Unit Plan Layout</h4>

            <div
              className={`pl-img-box ${!unlocked ? "pl-blur" : ""}`}
              onClick={() => handleImageClick(unitplan)}
            >
              <span className="cta-text" style={{ display: !unlocked ? "block" : "none" }}>Request Unit Plan Layout</span>
              <img src={unitplan} alt="Unit Plan" />

              {!unlocked && (
                <div className="pl-overlay">
                  <button>Request Unit Plan Layout</button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* FORM */}
        {showForm && (
          <div className="pl-glass-modal">
            <div className="pl-glass-box">

              <h3>Unlock Floor Plans</h3>

              <form onSubmit={handleSubmit} noValidate>

                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}

                <input
                  name="phone"
                  placeholder="Mobile Number"
                  type="tel"
                  inputMode="numeric"
                  onChange={handleChange}
                  maxLength={10}
                  onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                    }}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}

                <input
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <span className="pl-loader"></span> : "Submit & Unlock"}
                </button>

              </form>

              <span className="pl-close" onClick={() => setShowForm(false)}>✕</span>
            </div>
          </div>
        )}

        {previewImg && (
          <div className="pl-preview" onClick={() => setPreviewImg(null)}>
            <span className="pl-preview-close">✕</span>
            <img src={previewImg} alt="preview" />
          </div>
        )}

        {showToast && (
          <div className="pl-toast">✅ Plans Unlocked Successfully!</div>
        )}

      </div>
    </section>
  );
};

export default Plans;