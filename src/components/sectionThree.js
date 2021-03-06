import React from "react";
import "./sectionThree.css";
import LAUNCH from "./LAUNCH/LAUNCH";

const SectionThree = () => {
  return (
    <div className="sectThree-background">
     
      <LAUNCH/>
      
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
            Volunteer
          </a>
         
        
        </div>
      </div>

      <div id="mars">
       
      </div>
      <div id="footer">
     <a href="https://www.linkedin.com/in/erikatidwell/" target="_blank"
          rel="noopener noreferrer" id="icon-social">LinkedIn</a>
          <a href="https://github.com/erikacolette29" target="_blank"
          rel="noopener noreferrer" id="icon-social">Github</a>
      </div>
      {/* <div class="stars"></div>
      <div class="twinkling"></div> */}
    
    </div>
  );
};

export default SectionThree;
