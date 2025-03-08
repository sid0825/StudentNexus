// SpotsAvailableSection.js

import React from "react";

const SpotsAvailableSection = () => {
  return (
    <section>
      <br />
      <h4>Available Rooms</h4>
      <div className="flx content_space room_dspl">
        <div className="flx">
          <img className="room_img" src="images/t4.jpeg" alt="Image" />
          <p>Superior room - City view - 1 bed</p>
        </div>
        <div className="flx div_right">
          <p>
            <b>Rs. 54000/night</b>
          </p>
          <button>Book Now</button>
        </div>
      </div>
      <hr />
      <div className="flx content_space room_dspl">
        <div className="flx">
          <img className="room_img" src="images/t4.jpeg" alt="Image" />
          <p>Superior room - City view - 1 bed</p>
        </div>
        <div className="flx txt_right">
          <p>
            <b>Rs. 54000/night</b>
          </p>
          <button>Book Now</button>
        </div>
      </div>
      <hr />
      <div className="flx content_space room_dspl">
        <div className="flx">
          <img className="room_img" src="images/t4.jpeg" alt="Image" />
          <p>Superior room - City view - Family bed</p>
        </div>
        <div className="flx txt_right">
          <p>
            <b>Rs. 54000/night</b>
          </p>
          <button>Book Now</button>
        </div>
      </div>
      <hr />
      <div className="flx content_space room_dspl">
        <div className="flx">
          <img className="room_img" src="images/t4.jpeg" alt="Image" />
          <p>Superior room - Sea View - Family</p>
        </div>
        <div className="flx txt_right">
          <p>
            <b>Rs. 54000/night</b>
          </p>
          <button>Book Now</button>
        </div>
      </div>
      <br />
    </section>
  );
};

export default SpotsAvailableSection;
