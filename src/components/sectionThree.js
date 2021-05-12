import React from "react";
import "./sectionThree.css";
import LAUNCH from "./LAUNCH/LAUNCH";

const SectionThree = () => {
  return (
    <div className="sectThree-background">
      {/* <LAUNCH/> */}

      <div className="getInvolved-box">
        <h2>Get Involved</h2>
        <div className="involved-buttons">
        <a
            href="https://www.nasa.gov/audience/forstudents/postsecondary/features/F_Astronaut_Requirements.html"
            target="_blank"
            rel="noopener noreferrer"
            className="astronaut button"
          >
            Become an Astronaut
          </a>
          <a
            href="https://www.nasa.gov/solve/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="challenges button"
          >
            Nasa Challenges
          </a>
          <a
            href="https://www.nasa.gov/langley/education/volunteer"
            target="_blank"
            rel="noopener noreferrer"
            className="volunteer button"
          >
            Voluneer
          </a>
         
        
        </div>
      </div>

      <div className="mars">
        {/* <div className="spot"></div> */}
        {/* <div className="spot3"></div>
        <div className="spot2"></div> */}
      </div>
      <div id="footer">
        <a href="https://www.nasa.gov/about/contact/index.html" target="_blank"
          rel="noopener noreferrer">Contact NASA</a>
      </div>
    </div>
  );
};

export default SectionThree;
