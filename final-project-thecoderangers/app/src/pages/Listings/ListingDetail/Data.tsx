// DataSection.js

import React from "react";

const DataSection = () => {
  return (
    <section>
      <h1 className="font">Overview</h1>
      <div className="font">
        <p>
          With a view overlooking the Arabian Sea and the Bandra Worli Sea Link,
          Taj Lands End, Mumbai is a luxury hotel, located in the midst of the
          pulsating life of Bandra. Its close proximity to the airport,
          Bandra-Kurla Complex, Lower Parel, Andheri and Worli business
          districts, our hotel in Bandra makes it an ideal choice for business
          as well as leisure travelers. The hotel boasts of the city’s finest
          accommodations, dining experiences and elegant conferencing and
          banquet facilities. Although contemporary, it reflects India’s warm
          and heartfelt tradition in hospitality. Ensconced within this luxury
          hotel in Mumbai, you could choose to overlook that you are at the
          nerve-centre of a thriving metropolis. Redefining style and comfort,
          our all-encompassing rooms and suites offer spectacular views of the
          majestic Arabian Sea. Be pampered by our world-renowned butlers and
          enjoy sumptuous in-room dining experiences, curated to perfection.
        </p>
      </div>
      <div className="flx">
        <div className="rating align_center">
          <h1>4.2</h1>
          <p>Very good (981 reviews)</p>
        </div>
        <div className="rating_a align_center">
          <img className="img_left" src="Images1/bed-solid (1).svg" alt="" />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="">Near Park</label>
        </div>
        <div className="rating_a">
          <img className="img_left" src="Images1/bed-solid (1).svg" alt="" />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="">Near Park</label>
        </div>
        <div className="rating_a">
          <img className="img_left" src="Images1/bed-solid (1).svg" alt="" />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="">Near Park</label>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
