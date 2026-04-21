import React, { useState } from 'react';
import { FaLock, FaUnlockAlt, FaChevronLeft, FaChevronRight, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { IoIosLock } from "react-icons/io";
import emailjs from '@emailjs/browser';
import '../assets/css/plansection.css';

import masterplan from "../assets/images/plans/masterplan.jpeg";
import floorplan from "../assets/images/plans/floorplan.jpeg";
import unitplan1 from "../assets/images/plans/unitplan45.jpeg";
import unitplan2 from "../assets/images/plans/unitplan35.jpeg";
import unitplan3 from "../assets/images/plans/unitprivate35.jpeg";
import unitplan4 from "../assets/images/plans/unitprivate25.jpeg";
import stamp from "../assets/images/plans/stamp.png";
import living from "../assets/images/plans/living.png";
import flat from "../assets/images/plans/flat.png";

const PlanSection = () => {
    const [activeTab, setActiveTab] = useState('master');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [showImagePreview, setShowImagePreview] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [touchStartX, setTouchStartX] = useState(0);

    // ========== EMAILJS CONFIGURATION (REPLACE WITH YOURS) ==========
    const EMAILJS_SERVICE_ID = 'service_s8gqyej';
    const EMAILJS_TEMPLATE_ID = 'template_tu67rcz';
    const EMAILJS_PUBLIC_KEY = '6Hzlr8ke7bZzeSxxj';

    const tabs = {
        master: {
            label: 'Master Plan',
            images: [
                masterplan
                //'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80',
                //'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80'
            ]
        },
        unit: {
            label: 'Unit Plan',
            images: [
                unitplan1,
                unitplan2,
                unitplan3
                //'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
                //'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80',
                //'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80'
            ]
        },
        floor: {
            label: 'Floor Plan',
            images: [
                floorplan
                //'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
                //'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80',
                //'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&q=80'
            ]
        }
    };

    const currentTabData = tabs[activeTab];
    const currentImage = currentTabData.images[currentImageIndex];
    const hasMultipleImages = currentTabData.images.length > 1;



    //   const handleImageClick = () => !isUnlocked && setShowModal(true);
    const handleImageClick = () => {
        if (!isUnlocked) {
            setShowModal(true);
        } else {
            setShowImagePreview(true);
        }
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        if (!isUnlocked) return;
        setCurrentImageIndex(prev => prev === 0 ? currentTabData.images.length - 1 : prev - 1);
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        if (!isUnlocked) return;
        setCurrentImageIndex(prev => prev === currentTabData.images.length - 1 ? 0 : prev + 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;
        if (name === 'phone') processedValue = value.replace(/\D/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, [name]: processedValue }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit number';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = async () => {
        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            plan_type: currentTabData.label,
            timestamp: new Date().toLocaleString()
        };
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        try {
            await sendEmail();
            //   setIsUnlocked(true);
            //   setShowModal(false);

            setIsUnlocked(true);

            setTimeout(() => {
                setShowModal(false);
            }, 100);

            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 3000);
            setFormData({ name: '', email: '', phone: '' });
            setCurrentImageIndex(0);
        } catch (err) {
            console.log(err);

            alert('Failed to send email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        if (!isSubmitting) {
            setShowModal(false);
            setErrors({});
        }
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setCurrentImageIndex(0);
    };


    const handleZoom = (e) => {
        e.stopPropagation();

        if (e.deltaY < 0) {
            setZoomLevel((prev) => Math.min(prev + 0.2, 3));
        } else {
            setZoomLevel((prev) => Math.max(prev - 0.2, 1));
        }
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
            setCurrentImageIndex(prev =>
                prev === currentTabData.images.length - 1 ? 0 : prev + 1
            );
        } else if (diff < -50) {
            setCurrentImageIndex(prev =>
                prev === 0 ? currentTabData.images.length - 1 : prev - 1
            );
        }
    };


    return (
        <section className="ps-wrapper" id="plans">
            <div className="ps-glow ps-glow-1"></div>
            <div className="ps-glow ps-glow-2"></div>

            <div className="ps-container">
                <div className="ps-header">
                    <span className="ps-badge">✦ EXCLUSIVE ACCESS ✦</span>
                    <h2 className="ps-title">Explore Your <span className="ps-gold">Dream Space</span></h2>
                    <div className="bar mt-0">
                        <div className="bar-fill plansBar"></div>
                    </div>
                    {/* <div className="ps-underline"></div> */}
                    <p className="ps-subtitle mt-1">Unlock detailed floor plans & architectural masterpieces</p>
                    {isUnlocked && <div className="ps-unlockBadge"><FaUnlockAlt /> Plans Unlocked</div>}
                </div>

                <div className="ps-tabs">
                    {Object.entries(tabs).map(([id, data]) => (
                        <button key={id} className={`ps-tabBtn ${activeTab === id ? 'ps-active' : ''}`} onClick={() => handleTabChange(id)}>
                            <span className="ps-tabDot"></span>{data.label}
                        </button>
                    ))}
                </div>

                <div className="ps-imageWrapper" onClick={handleImageClick}>
                    <div className={`ps-imageCard ${!isUnlocked ? 'ps-blurred' : ''}`}>
                        {/* <img src={currentImage} alt={`${activeTab} plan`} className="ps-image" /> */}
                        <img
                            key={currentImage}
                            src={currentImage}
                            alt={`${activeTab} plan`}
                            className="ps-image"
                        />
                        {!isUnlocked && (
                            <div className="ps-blurOverlay">
                                <IoIosLock className="ps-lockIcon filterDropBlack" />
                                <p className="ps-overlayText filterDropBlack">Click to Unlock Premium Plans</p>
                                <span className="ps-overlaySubtext filterDropBlack">Fill details for instant access</span>
                            </div>
                        )}
                        {isUnlocked && hasMultipleImages && (
                            <>
                                <button className="ps-sliderBtn ps-prev" onClick={handlePrevImage}><FaChevronLeft /></button>
                                <button className="ps-sliderBtn ps-next" onClick={handleNextImage}><FaChevronRight /></button>
                                <div className="ps-dots">
                                    {currentTabData.images.map((_, idx) => (
                                        <span key={idx} className={`ps-dot ${idx === currentImageIndex ? 'ps-dotActive' : ''}`} onClick={(e) => { e.stopPropagation(); if (isUnlocked) setCurrentImageIndex(idx); }}></span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {!isUnlocked && <div className="ps-clickHint"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg><span>Tap to unlock</span></div>}
                </div>

                <div className="ps-features">
                    <div className="ps-featureCard"><div className="ps-featureIcon"> <img src={stamp} width="50" className='filterDrop' alt="" /> </div><h4>Zero Stamp Duty*</h4><p>Limited period offer</p></div>
                    <div className="ps-featureCard"><div className="ps-featureIcon"> <img src={living} width="50" className='filterDrop' alt="" /> </div><h4>Premium Living</h4><p>Baner, Pune</p></div>
                    <div className="ps-featureCard"><div className="ps-featureIcon"> <img src={flat} className='filterDrop flatIcon' alt="" /> </div><h4>2 & 3 BHK</h4><p>838-1213 sq.ft.</p></div>
                </div>
            </div>

            {showModal && (
                <div className="ps-modalOverlay" onClick={closeModal}>
                    <div className="ps-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="ps-modalClose" onClick={closeModal}>&times;</button>
                        <div className="ps-modalHeader">
                            <div className="ps-modalIcon"><FaLock /></div>
                            <h3>Unlock Premium Plans</h3>
                            <p>Get instant access to detailed floor plans</p>
                        </div>
                        <form onSubmit={handleSubmit} className="ps-form" noValidate>
                            <div className="ps-formGroup">
                                <label>Full Name</label>
                                <div className="ps-inputWrapper">
                                    <FaUser className="ps-inputIcon" />
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={errors.name ? 'ps-error' : ''} />
                                </div>
                                {errors.name && <span className="ps-errorMsg">{errors.name}</span>}
                            </div>
                            <div className="ps-formGroup">
                                <label>Email Address</label>
                                <div className="ps-inputWrapper">
                                    <FaEnvelope className="ps-inputIcon" />
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className={errors.email ? 'ps-error' : ''} />
                                </div>
                                {errors.email && <span className="ps-errorMsg">{errors.email}</span>}
                            </div>
                            <div className="ps-formGroup">
                                <label>Phone Number</label>
                                <div className="ps-inputWrapper">
                                    <FaPhoneAlt className="ps-inputIcon" />
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="9876543210" maxLength="10" className={errors.phone ? 'ps-error' : ''} />
                                </div>
                                {errors.phone && <span className="ps-errorMsg">{errors.phone}</span>}
                            </div>
                            <button type="submit" className="ps-submitBtn" disabled={isSubmitting}>
                                {isSubmitting ? <span className="ps-loader"></span> : <>Unlock Plans →</>}
                            </button>
                            <p className="ps-note">*By submitting, you agree to receive updates. Your data is secure.</p>
                        </form>
                    </div>
                </div>
            )}


            {/* Success Toast - Improved visibility */}
            {submitSuccess && (
                <div className="ps-toast">
                    <span className="ps-toastIcon">✨</span>
                    <span className="ps-toastMsg">Plans Unlocked! Check your email for confirmation.</span>
                </div>
            )}



            {showImagePreview && (
                <div
                    className="ps-imgPreviewOverlay"
                    onClick={() => {
                        setShowImagePreview(false);
                        setZoomLevel(1);
                    }}
                    onTouchStart={() => {
                        setShowImagePreview(false);
                        setZoomLevel(1);
                    }}
                >
                    {/*  onClick={() => setShowImagePreview(false)} */}

                    <span
                        className="ps-imgClose"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowImagePreview(false);
                            setZoomLevel(1);
                        }}
                        onTouchStart={(e) => {
                            e.stopPropagation();
                            setShowImagePreview(false);
                            setZoomLevel(1);
                        }}
                    >
                        &times;
                    </span>

                    <img
                        src={currentImage}
                        alt="preview"
                        className="ps-imgPreview"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={handleTouchEnd}
                        onWheel={handleZoom}
                        style={{ transform: `scale(${zoomLevel})` }}
                    />

                    {hasMultipleImages && (
                        <>
                            <button
                                className="ps-previewBtn ps-prev"
                                onClick={(e) => { e.stopPropagation(); handlePrevImage(e); }}
                            >
                                <FaChevronLeft />
                            </button>

                            <button
                                className="ps-previewBtn ps-next"
                                onClick={(e) => { e.stopPropagation(); }}
                            >
                                <FaChevronRight />
                            </button>
                        </>
                    )}

                </div>
            )}


        </section>
    );
};

export default PlanSection;