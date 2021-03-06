import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand header-title" id="nasa" href="/">
          NASA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ><img className="icon" src="images/info.png"></img>
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                   id="di"
                    className="dropdown-item"
                    href="https://www.nasa.gov/about/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                   id="di"
                    className="dropdown-item"
                    href="https://www.nasa.gov/topics/history/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                   id="di"
                    className="dropdown-item "
                    href="https://www.nasa.gov/topics/benefits/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Benefits You
                  </a>
                </li>
                <li>
                  <a
                  id="di"
                    className="dropdown-item "
                    href="https://www.nasa.gov/news/media/info/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nasa Audiences
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.nasa.gov/topics/humans-in-space"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src="/images/astronaut.png"></img> Humans In Space
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.nasa.gov/topics/technology/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src="/images/telescope.png"></img> Space Tech
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://www.nasa.gov/topics/solarsystem/index.html"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="icon" src="/images/planets.png"></img>Solar System
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                   id="di"
                    className="dropdown-item"
                    href="https://www.nasa.gov/topics/solarsystem/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solar System and Beyond
                  </a>
                </li>
                <li>
                  <a
                   id="di"
                    className="dropdown-item"
                    href="https://www.nasa.gov/topics/earth/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Earth
                  </a>
                </li>
                <li>
                  <a
                   id="di"
                    className="dropdown-item"
                    href="https://www.nasa.gov/topics/moon-to-mars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Moon to Mars
                  </a>
                </li>
                <li>
                  <a
                   id="di"
                    className="dropdown-item"
                    href="https://www.nasa.gov/topics/aeronautics/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flight
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
               id="di"
                className="nav-link"
                href="https://www.nasa.gov/stem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src="/images/book.png"></img> STEM Engagement
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://www.nasa.gov/multimedia/nasatv/index.html#public"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon2" src="/images/television.png"></img> Nasa TV
              </a>
            </li>
           
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
