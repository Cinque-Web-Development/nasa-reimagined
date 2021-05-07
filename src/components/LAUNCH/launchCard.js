import React from 'react';
import './launchCard.css'

const LaunchCard = (name, mission, type, start, end, image, location) => {
    return ( 
        <div className="launch-container">
    <div className="image-container">
        <img classname="launch-img" src={image}></img>
    </div> 

    <div>
        <h2>{name}</h2>
        <p>{mission}</p>
        <p>{type}</p>
        <p>{start} - {end}</p>
        <p>{location}</p>
    </div>
    
    </div>
    );
}
 
export default LaunchCard;