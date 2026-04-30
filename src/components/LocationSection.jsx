import React, { useState } from "react";
import "../assets/css/locationsection.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationSection = ({ openForm }) => {
  const [activeTab, setActiveTab] = useState("connectivity");

  const tabs = [
    { id: "connectivity", label: "Connectivity" },
    { id: "schools", label: "Schools" },
    { id: "hospitals", label: "Hospitals" },
    { id: "malls", label: "Malls & Entertainment" },
  ];

  const connectivityData = [
    "National Highway (NH 48) – 5 min",
    "Hinjawadi Phase 1 – 12 min",
    "Rajiv Gandhi IT Park – 20 min",
    "TCS – 10 min",
    "Pune Airport – 45 min",
    "Pune Railway Station – 40 min",
  ];

  const schoolsData = [
    "Crimson Anisha Global School – 3 min",
    "Indira International School – 12 min",
    "The Orchid School – 15 min"
  ]

  const hospitalsData = [
    "Apollo Clinic – 10 min",
    "Aditya Birla Hospital – 15 min",
    "Surya Mother & Child Super Speciality Hospital – 10 min",
    "Life Point Hospital – 10 min",
    "Sahyadri Hospital – 10 min",
    "Jupiter Hospital – 12 min"
  ]

  const mallsData = [
    "Xion Mall – 10 min",
    "PVR – 8 min",
    "Balewadi High Street – 10 min"
  ]


  return (
    <section className="loc-sec">
      <div className="container">

        {/* TITLE */}
        <div className="loc-header">
          <h2>Well-Connected Location</h2>
          <div className="bar mb-5"><div className="bar-fill"></div></div>
        </div>

        {/* MAP */}
        <div className="loc-map">
          <iframe
            title="location-map"
            src="https://maps.google.com/maps?q=Tathawade,%20Dattwadi,%20Jambe,%20Maharashtra%20411033&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* TABS */}
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

        {/* CONTENT */}
        <div className="loc-content">
          {activeTab === "connectivity" && (
            <ul>
              {connectivityData.map((item, i) => (
                <li key={i}>
                  <FaMapMarkerAlt className="icon" /> {item}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "schools" && (
            <ul>
              {schoolsData.map((item, i) => (
                <li key={i}>
                  <FaMapMarkerAlt className="icon" /> {item}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "hospitals" && (
            <ul>
              {hospitalsData.map((item, i) => (
                <li key={i}>
                  <FaMapMarkerAlt className="icon" /> {item}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "malls" && (
            <ul>
              {mallsData.map((item, i) => (
                <li key={i}>
                  <FaMapMarkerAlt className="icon" /> {item}
                </li>
              ))}
            </ul>
          )}

          {/* {activeTab !== "connectivity" && (
            <div className="loc-empty">
              Content will be added
            </div>
          )} */}
        </div>

        {/* BUTTON */}
        <div className="loc-btn-wrap mt-5">
          <button className="loc-btn" onClick={() => openForm("Location Details")}>Request Location Details</button>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;