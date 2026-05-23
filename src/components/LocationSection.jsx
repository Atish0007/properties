import React, { useState } from "react";
import "../assets/css/locationsection.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import CommonForm from "./CommonForm"; // adjust path as needed
import { FaLock, FaUnlockAlt } from 'react-icons/fa';

const LocationSection = ({ openForm }) => {
  const [activeTab, setActiveTab] = useState("connectivity");
  const [mapUnlocked, setMapUnlocked] = useState(false);
  const [showMapForm, setShowMapForm] = useState(false);

  const tabs = [
    { id: "connectivity", label: "Connectivity" },
    { id: "schools", label: "Schools" },
    { id: "hospitals", label: "Hospitals" },
    { id: "busstop", label: "Bus Stop" },
    { id: "clinic", label: "Clinic" },
    { id: "restaurant", label: "Restaurant" },
    { id: "temple", label: "Temple" },
    { id: "supermarket", label: "Supermarket" },
    { id: "clothing", label: "Clothing" }
  ];

  const connectivityData = [
    "Chandani Chowk - 10 min",
    "Mumbai-Bengaluru Hwy – 10 min",
    "Hinjawadi Phase 1 – 20 min",
    "Rajiv Gandhi IT Park – 30 min",
    "Pune Airport – 45 min",
    "Pune Railway Station – 40 min",
  ];

  const schoolsData = [
    "Snbp Bavdhan – 1.17 km",
    "Ryan International Academy – 1.74 km",
    "Ryan International School – 1.81 km",
    "Indian Model International School – 1.88 km",
    "Sri Chaitanya Techno School - 2.36 km"
  ];

  const hospitalsData = [
    "Shatayu Hospital Bhugaon – 0.03 km",
    "Life Line Multispeciality Hospital – 0.04 km",
    "Asian Speciality Hospital – 0.24 km",
    "Patil Orthopaedic Hospital – 1.22 km",
    "Unique Multispeciality Hospital – 1.48 km"
  ];

  const busData = [
    "Deault Garden - 0.17 km",
    "Marialai Mandir - 0.22 km",
    "Bhugaon - 0.57 km",
    "Deshmukh Vasti - 0.73 km",
    "Chukte Vasti - 1.20 km"
  ];

  const clinicData = [
    "A.G Diagnostics - Dr Ajit Golw - 0.03 km",
    "Dr.Shegaonkar’s Dental Aesthetic - 0.05 km",
    "Orchid Eye Care Clinic - 0.05 km",
    "Apple Hospital Rajyashree Hair - 0.54 km",
    "Thyrocare Pathlab - 0.92 km",
  ];

  const restaurantData = [
    "Tippy Turtle - 0.60 km",
    "Planet 9 - 0.66 km",
    "Frangipani - Ambrosia Resort & Spa - 1.35 km",
    "Sarovar A Multi Cuisine Resto - 2.00 km",
    "Smoke On The Water - 2.11 km"
  ];

  const templeData = [
    "Padmavati Devi Mandir - 0.58 km",
    "Khandoba Mandir Shree Padmavati Devi Temple - 2.28 km",
    "Khandoba Mandir Bhurde Vasti B - 2.37 km",
    "Shree Bapuji Buwa Temple - 2.61 km",
    "Shree Vitthal Rakhumai Mandir - 2.63 km"
  ];

  const supermarketData = [
    "Irrant Temple - 3.16 km",
    "New Deeplaxmi Super Market - 3.16 km",
    "Whole Mort - 4.20 km",
    "Jagadisa Super Market - 4.23 km",
    "Add Mart - 4.47 km",
  ];

  const clothingData = [
    "Zudio - 1.3 km",
    "Sali Fashion - 0.03 km",
    "Sali Collection (Sai Fashion) - 2.50 km",
    "Firstry.Com Store Pune Bavdha - 3.05 km",
    "Go Colors Store – Bavdhan - 3.15 km",
    "Pantaloons (Paul Road) - 3.87 km",
  ];

  const handleMapClick = () => {
    if (!mapUnlocked) setShowMapForm(true);
  };

  const onMapUnlockSuccess = () => {
    setMapUnlocked(true);
  };

  return (
    <section className="loc-sec" id="location">
      <div className="container">
        {/* TITLE */}
        <div className="loc-header">
          <h2 className="headingFontSize text-center">Well-Connected Location</h2>
          <div className="bar mb-5"><div className="bar-fill"></div></div>
        </div>

        {/* MAP SECTION with inline styles for blur and overlay */}
        <div style={{ position: "relative", marginBottom: "2rem", borderRadius: "20px", overflow: "hidden" }}>
          <div
            style={{
              width: "100%",
              height: "300px",
              filter: mapUnlocked ? "none" : "blur(3px)",
              pointerEvents: mapUnlocked ? "auto" : "none",
              transition: "filter 0.3s ease"
            }}
          >
            <iframe
              title="location-map"
              src="https://maps.google.com/maps?q=The+Winds+by+Kolte+Patil+Bhugaon+Pune&z=14&ie=UTF8&iwloc=&output=embed"
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          {!mapUnlocked && (
            <div
              onClick={handleMapClick}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgb(0 0 0 / 18%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2
              }}
            >
              <button
                style={{
                  background: "#58ad87", //"rgb(171 171 171)", //"#ff7a00",
                  color: "white",
                  border: "none",
                  padding: "10px 25px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "40px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                }}
              >
                <FaLock /> Click to Unlock Map
              </button>
            </div>
          )}
        </div>

        {/* TABS - always visible */}
        <div className="loc-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`loc-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT LISTS - always visible */}
        <div className="loc-content">
          {activeTab === "connectivity" && (
            <ul>
              {connectivityData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "schools" && (
            <ul>
              {schoolsData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "hospitals" && (
            <ul>
              {hospitalsData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "busstop" && (
            <ul>
              {busData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "clinic" && (
            <ul>
              {clinicData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "restaurant" && (
            <ul>
              {restaurantData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "temple" && (
            <ul>
              {templeData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "supermarket" && (
            <ul>
              {supermarketData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
          {activeTab === "clothing" && (
            <ul>
              {clothingData.map((item, i) => (
                <li key={i}><FaMapMarkerAlt className="icon" /> {item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* BUTTON - always visible */}
        <div className="loc-btn-wrap mt-5">
          <button className="loc-btn" onClick={() => openForm("Location Details")}>
            Request Location Details
          </button>
        </div>

        {/* CommonForm for unlocking map */}
        <CommonForm
          isOpen={showMapForm}
          onClose={() => setShowMapForm(false)}
          title="Unlock Map"
          onSuccess={onMapUnlockSuccess}
        />
      </div>
    </section>
  );
};

export default LocationSection;