import React from "react";
import "./sectionTwo.css";

import APOD from "./APOD/APOD";
import NEWS from './NEWS/NEWS'


const SectionTwo = () => {
  return (
    <>
    
    <div className="sectiontwo-background">
       
        <NEWS/>
      <div className="jupiter-box">
        <div className="jupitertop"></div>
        <div className="jupiterRing"></div>
        <div className="jupiterBottom"></div>
      </div>

      <APOD />

    </div>
    </>
  );
};

export default SectionTwo;
