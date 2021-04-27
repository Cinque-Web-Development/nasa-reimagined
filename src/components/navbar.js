import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
   
      <div id="nav-container" className="ui secondary top fixed menu">
        <a href="/" id="nasa" className="item">
          NASA
        </a>
        <div className="right menu">
        <a href="https://www.nasa.gov/about/index.html" target="_blank" rel="noopener noreferrer" id="about"className="item">
    About
        </a>
        <a href="https://www.nasa.gov/topics/humans-in-space" target="_blank" rel="noopener noreferrer" className="item">
        <img src="/images/astronaut.png"></img>
        </a>
        <a href="https://www.nasa.gov/topics/technology/index.html" target="_blank" rel="noopener noreferrer"  className="item">
        <img src="/images/telescope.png"></img>
        </a>
        <a href="https://www.nasa.gov/topics/solarsystem/index.html" target="_blank" rel="noopener noreferrer" className="item">
        <img src="/images/planets.png"></img>
        </a>
        <a href="https://www.nasa.gov/stem" className="item" target="_blank" rel="noopener noreferrer" >
        <img src="/images/book.png"></img>
        </a>
        
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
         
        </div>
      </div>
    
  );
};

export default Navbar;
