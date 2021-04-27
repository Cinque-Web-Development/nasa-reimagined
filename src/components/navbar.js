import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
   
      <div className="ui secondary top fixed menu">
        <a href="/" className="item">
          NASA
        </a>
        <div className="right menu">
        <a href="/" className="item">
        About
        </a>
        <a href="/" className="item">
        <img src="/images/astronaut.png"></img>
        </a>
        <a href="/" className="item">
        <img src="/images/telescope.png"></img>
        </a>
        <a href="/" className="item">
        <img src="/images/planets.png"></img>
        </a>
        <a href="/" className="item">
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
