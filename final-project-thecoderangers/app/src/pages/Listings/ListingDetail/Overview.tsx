// BasicOverviewSection.js

import React from "react";

const OverviewSection = () => {
  return (
    <section>
      {/* Basic overview section mentioning name, photo, and price of the listing */}
      <div>
        <label className="lbl_clr" htmlFor="India">
          INDIA
          <img
            src="images/icons/chevron_forward.png"
            alt="next"
            className="forward_logo"
          />
          &ensp;&ensp;&ensp;
        </label>
        <label className="lbl_clr" htmlFor="Mumbai">
          MUMBAI
          <img
            src="images/icons/chevron_forward.png"
            alt="next"
            className="forward_logo"
          />
          &ensp;&ensp;&ensp;
        </label>
        <label htmlFor="name"> TAJ LAND ENDS MUMBAI </label>
      </div>
      <br />
      <div className="flx content_space">
        <div>
          <p style={{ fontFamily: "Helvetica" }}>TAJ LAND ENDS MUMBAI</p>
          <i className="fa-solid fa-star lbl_clr"></i>
          <i className="fa-solid fa-star lbl_clr"></i>
          <i className="fa-solid fa-star lbl_clr"></i>
          <i className="fa-solid fa-star lbl_clr"></i>
          <p className="lbl_clr" style={{ fontFamily: "Helvetica" }}>
            5 STAR HOTEL
          </p>
        </div>
        <div id="rightside">
          <p style={{ fontFamily: "Helvetica" }}>
            <b>₹10000/night</b>
          </p>
        </div>
      </div>
      <br />
      <div className="display_inline">
        <span>
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <p style={{ fontFamily: "Helvetica" }}>
          Bandstand Promenade, Bandra West, Mumbai, Maharashtra 400050, India
        </p>
      </div>
      <div className="flx content_space">
        <div className="flx content_center div_right align_cntr">
          <div className="flx content_center share_book_now align_cntr">
            <label>4.2 </label>
          </div>
          <p style={{ fontFamily: "Helvetica" }}>&ensp;Very Good 371</p>
        </div>
        <div className="flx ab">
          <div className="flx content_center share_book_now align_cntr">
            <i className="fa-regular fa-heart hotel-review-icon"></i>
          </div>
          &ensp;
          <div className="flx content_center share_book_now align_cntr">
            <i className="fa-solid fa-share-nodes hotel-review-icon"></i>
          </div>
          <div className="div_right">
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <br />
      <div className="flx">
        <div className="half">
          <img
            className="img_widthfull full-image"
            src="images/t1.jpeg"
            alt="Full Image"
          />
        </div>
        <div className="half img_a">
          <div className="grid-item">
            <img src="images/t2.jpeg" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="images/t2.jpeg" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="images/t2.jpeg" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="images/t2.jpeg" alt="Image 1" />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </section>
  );
};

export default OverviewSection;
