import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "../assets/css/mapsection.css";

import { FaMapPin, FaCheckCircle } from "react-icons/fa";

const MapSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // EmailJS configuration (same as PlanSection)
  const EMAILJS_SERVICE_ID = 'service_s8gqyej';
  const EMAILJS_TEMPLATE_ID = 'template_tu67rcz';
  const EMAILJS_PUBLIC_KEY = '6Hzlr8ke7bZzeSxxj';

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === 'phone') processedValue = value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, [name]: processedValue }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async () => {
    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formData.phone,
      enquiry_type: 'Map Section Enquiry',
      timestamp: new Date().toLocaleString()
    };
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await sendEmail();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      // Reset form only if you want (optional – keep as per requirement)
      // setFormData({ fullName: "", phone: "", email: "" });
      // setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('Failed to send enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nearbyPlaces = [
    "The Back Benchers Cafe",
    "Vishodhan",
    "Hotel Sunday Monday",
    "Arihant College Of Education"
  ];

  return (
    <section className="map-section">
      <div className="container">
        <div className="section-badge">Live Location</div>
        <h2 className="section-title">Explore Our <span>Prime Location</span></h2>
        <div className="bar mb-4">
            <div className="bar-fill"></div>
        </div>

        <div className="map-grid">
          {/* Left Column - Map & Nearby */}
          <div className="map-left">
            <div className="map-card">
              <div className="map-header">
                <h3>Map of Bramha<span className="headingText">Corp</span></h3>
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">3.5</span>
                  <span className="reviews">(407 reviews)</span>
                </div>
              </div>

              <div className="map-wrapper">
                <iframe
                  title="BRAHMACORP Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456!2d73.789!3d18.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEyLjAiTiA3M8KwNDcnMjAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="nearby-places">
                <h4><FaMapPin style={{color:"red"}}/> Nearby Landmarks</h4>
                <ul>
                  {nearbyPlaces.map((place, index) => (
                    <li key={index}>
                      <span className="place-icon">✦</span>
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="map-right">
            <div className="form-card">
              <h3>Contact Us</h3>
              <p className="form-subtitle">
                Please enter the details below to get in touch with us!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.fullName ? 'error-input' : ''}
                  />
                  {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                </div>

                <div className="input-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    maxLength="10"
                    className={errors.phone ? 'error-input' : ''}
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                <div className="input-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className={errors.email ? 'error-input' : ''}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>

              {/* Improved success message - visible and styled */}
              {submitted && (
                <div className="success-message" style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  marginTop: '16px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                   <FaCheckCircle className="fs-3"/> Thank you! We'll contact you soon.
                </div>
                // ✓
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;