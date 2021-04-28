import React from "react";
import "./sectionOne.css";

const SectionOne = () => {
  return (
    <div className="background">
        <div className="moon-ship-box"><div className="moon"></div></div>
        <div className="earth-box"><div className="earth"></div></div>
      <div className="text-box">
        <h1>The National Aeronautics and Space Administration </h1>
        <p>
          "Explore, discover, and expand knowledge for the benefit of humanity."
        </p>
        <a href="https://www.nasa.gov/socialmedia" target="_blank" rel="noopener noreferrer" className="follow-button btn btn-light">Follow</a>
      </div>
    </div>
  );
};

export default SectionOne;
