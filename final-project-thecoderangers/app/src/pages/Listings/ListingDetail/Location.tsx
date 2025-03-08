// LocationSection.js

import React from "react";

const LocationSection = () => {
  return (
    <section>
      <div className="flx content_space room_dspl">
        <div className="flx">
          <h4>Location/Map</h4>
        </div>
        <div className="flx txt_right">
          <button>View on maps</button>
        </div>
      </div>
      <br />
      <img src="images/map.webp" alt="Map" className="img_widthfull" />
      <div className="display_inline">
        <p>
          Bandstand Promenade, Bandra West, Mumbai, Maharashtra 400050, India
        </p>
      </div>
      <br />
    </section>
  );
};

export default LocationSection;
