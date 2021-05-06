import React from "react";
import "./sectionThree.css";

const SectionThree = () => {
  return (
    <div className="sectThree-background">
        {/* <div className="boxes-container">
           
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
        </div> */}
        <div className="buttons">
            <div className="astronaut-box">
            <img className="spaceman" src="images/spaceman.png"></img>
            <a className="astro-b">Become an Astronaut</a>
            </div>
            <a className="btn btn-light">Get Involved</a>
            <a className="btn btn-light">Downloads</a>
        </div>

      <div className="mars">
        <div className="spot"></div>
        <div className="spot3"></div>
        <div className="spot2"></div>
      </div>
    </div>
  );
};

export default SectionThree;
