import React, { useState } from "react";
import "../assets/css/amenities.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// IMAGES
import kidsPlay from "../assets/images/amenities/kidarea_01.webp";
import partyLawn from "../assets/images/amenities/party_01.webp";
import kidsPool from "../assets/images/amenities/kidpool_01.webp";
import workingPods from "../assets/images/amenities/workpods_01.webp";
import reflexPath from "../assets/images/amenities/reflexpath_01.webp";
import infinityPool from "../assets/images/amenities/infipool_01.webp";

import img1 from "../assets/images/amenities/img1.jpeg";
import img2 from "../assets/images/amenities/img2.jpeg";
import img3 from "../assets/images/amenities/img3.jpeg";
import img4 from "../assets/images/amenities/img4.jpeg";
import img5 from "../assets/images/amenities/img5.jpeg";

const Amenities = () => {
  const [preview, setPreview] = useState(null);

  // const amenitiesData = [
  //   { img: kidsPlay, title: "Kids’ Play Area" },
  //   { img: partyLawn, title: "Party Lawn" },
  //   { img: kidsPool, title: "Kids’ Pool" },
  //   { img: workingPods, title: "Working Pods" },
  //   { img: reflexPath, title: "Reflexology Path" },
  //   { img: infinityPool, title: "Infinity Edge Swimming Pool" },
  // ];

   const amenitiesData = [
    { img: img1, title: "Quiet Scented Garden" },
    { img: img2, title: "Game Zone" },
    { img: img3, title: "Infinity Edge Swimming Pool" }, //Kids’ Pool
    { img: img4, title: "Indoor Cafe" }, //Co-Working Spaces, Working Pods
    { img: img5, title: "Guest Rooms" },
    // { img: infinityPool, title: "" },
  ];

  return (
    <section className="am-sec" id="amenities">
      <div className="container">

        {/* HEADER */}
        <div className="am-header text-center">
          <h2 className="headingFontSize mb-0">Amenities</h2>
          
          {/* <button className="am-btn">Download Amenities</button> */}
        </div>
        <div className="bar mb-5"><div className="bar-fill"></div></div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {amenitiesData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="am-card" onClick={() => setPreview(item.img)}>
                <img src={item.img} alt={item.title} />
                <div className="am-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PREVIEW */}
        {preview && (
          <div className="am-preview" onClick={() => setPreview(null)}>
            <span className="am-close">✕</span>
            <img src={preview} alt="preview" />
          </div>
        )}

      </div>
    </section>
  );
};

export default Amenities;