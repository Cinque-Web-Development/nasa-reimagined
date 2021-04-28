import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" id="nasa" href="/">NASA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="https://www.nasa.gov/about/index.html" target="_blank" rel="noopener noreferrer" >About</a></li>
            <li><a class="dropdown-item" href="https://www.nasa.gov/topics/history/index.html" target="_blank" rel="noopener noreferrer" >History</a></li>
            <li><a class="dropdown-item" href="https://www.nasa.gov/topics/benefits/index.html" target="_blank" rel="noopener noreferrer" >Benefits You</a></li>
            <li><a class="dropdown-item" href="https://www.nasa.gov/news/media/info/index.html" target="_blank" rel="noopener noreferrer" >Nasa Audiences</a></li>
          </ul>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="https://www.nasa.gov/topics/humans-in-space" target="_blank" rel="noopener noreferrer" ><img className="icon" src="/images/astronaut.png"></img></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.nasa.gov/topics/technology/index.html" target="_blank" rel="noopener noreferrer"><img className="icon" src="/images/telescope.png"></img></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="https://www.nasa.gov/topics/solarsystem/index.html"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="icon" src="/images/planets.png"></img>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://www.nasa.gov/topics/solarsystem/index.html" target="_blank" rel="noopener noreferrer" >Solar System and Beyond</a></li>
            <li><a class="dropdown-item" href="https://www.nasa.gov/topics/earth/index.html" target="_blank" rel="noopener noreferrer" >Earth</a></li>
            <li><a class="dropdown-item" href="https://www.nasa.gov/topics/moon-to-mars" target="_blank" rel="noopener noreferrer" >Moon to Mars</a></li>
            <li><a class="dropdown-item" href="https://www.nasa.gov/topics/aeronautics/index.html" target="_blank" rel="noopener noreferrer" >Flight</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.nasa.gov/stem" target="_blank" rel="noopener noreferrer"><img className="icon" src="/images/book.png"></img></a>
        </li>
      </ul>
      <form class="d-flex">

        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    




  );
};

export default Navbar;


