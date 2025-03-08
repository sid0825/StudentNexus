// AmenitiesSection.js

import React from "react";

const AmenitiesSection = () => {
  return (
    <section className="Amenities border-line">
      <h1>Amenities</h1>
      <ul className="flx img_widthfull flex-display">
        <div className="flx amenities-column">
          <li className="amenties">
            <i className="fa-solid fa-water-ladder"></i>
            Outdoor pool
          </li>
          <li className="amenties">
            <i className="fa-solid fa-water-ladder"></i>
            Indoor pool
          </li>
          <li className="amenties">
            <i className="fa-solid fa-spa"></i>
            Spa and wellness centre
          </li>
          <li className="amenties">
            <i className="fa-solid fa-utensils"></i>
            Restaurant
          </li>
          <li className="amenties">
            <i className="fa-solid fa-bowl-food"></i>
            Room Service
          </li>
        </div>
        <div className="flx amenities-column">
          <li className="amenties">
            <i className="fa-solid fa-dumbbell"></i>
            Fitness center
          </li>
          <li className="amenties">
            <i className="fa-solid fa-wine-glass"></i>
            Bar lounge
          </li>
          <li className="amenties">
            <i className="fa-solid fa-wifi"></i>
            Free Wifi
          </li>
          <li className="amenties">
            <i className="fa-solid fa-mug-saucer"></i>
            Tea/coffee machine
          </li>
         
        </div>
      </ul>
      <p>+24 more</p>
    </section>
  );
};

export default AmenitiesSection;
