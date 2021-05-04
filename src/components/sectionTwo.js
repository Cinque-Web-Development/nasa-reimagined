import React from "react";
import "./sectionTwo.css";

import APOD from "./APOD/APOD";

const SectionTwo = () => {
  return (
    <div className="sectiontwo-background">
      <div className="jupiter-box">
        <div className="jupitertop"></div>
        <div className="jupiterRing"></div>
        <div className="jupiterBottom"></div>
      </div>

      <div className="news-feed">News Feed</div>
      <APOD />
    </div>
  );
};

export default SectionTwo;
