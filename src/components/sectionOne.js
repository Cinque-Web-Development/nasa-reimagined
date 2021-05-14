import React from "react";
import "./sectionOne.css";

const SectionOne = () => {
  return (
    <div className="background">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div className="moon-box">
        <div className="moon">
          <div className="crater-box">
          <div className="crater2"></div>
          <div className="crater"></div>
         
          </div>
        </div>
      </div>
      <div className="ship-box">
        <img className="ship" src="images/rocket.png"></img>
      </div>
      <div className="earth-box">
        <div className="earth"></div>
      </div>
      <div className="text-box">
        <h1 className="header-title">The National Aeronautics and Space Administration </h1>
        <p className="nasa-tagline">
          "Explore, discover, and expand knowledge for the benefit of humanity."
        </p>
        <a
          href="https://www.nasa.gov/socialmedia"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary follow-button"
        >
          Follow
        </a>
      </div>
    
    <div class="stars"></div>
    <div class="twinkling"></div><div class="stars"></div>
    <div class="twinkling"></div>
    </div>
  );
};

export default SectionOne;
