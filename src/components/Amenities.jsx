import React from "react";
import "../assets/css/amenities.css";
import swimming from "../assets/images/amenities/swimming.png";
import gym from "../assets/images/amenities/gym.png";
import garden from "../assets/images/amenities/garden.png";
import sport from "../assets/images/amenities/sport.png";
import yoga from "../assets/images/amenities/yoga.png";
import kids from "../assets/images/amenities/kids.png";
import club from "../assets/images/amenities/club.png";
import jogging from "../assets/images/amenities/jogging.png";

 
const amenitiesData = [
  { icon: swimming, title: "Swimming Pool" },
  { icon: gym, title: "Gymnasium" },
  { icon: garden, title: "Landscaped Gardens" },
  { icon: sport, title: "Sports Courts" },
  { icon: yoga, title: "Yoga Deck" },
  { icon: kids, title: "Kids Play Area" },
  { icon: club, title: "Clubhouse" },
  { icon: jogging, title: "Jogging Track" },
];

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="container">
        
        {/* Header */}
        <div className="amenities-header">
          <h2>Amenities at Puraniks Abitante</h2>
          {/* <div className="underline"></div> */}
          <div className="bar">
                <div className="bar-fill"></div>
          </div>

          <p>
            Experience a lifestyle of comfort and luxury with thoughtfully curated
            amenities designed for relaxation, wellness, and recreation.
          </p>
        </div>

        {/* Grid */}
        <div className="amenities-grid">
          {amenitiesData.map((item, index) => (
            <div className="amenity-card" key={index}>
              <div className="icon">
                <img src={item.icon} alt={item.title} width="50" height="auto"/>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;