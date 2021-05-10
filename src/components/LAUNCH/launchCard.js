import React from 'react';
import './launchCard.css'

const LaunchCard = ({name, mission, provider, start, end, image, location}) => {
    return ( 
        <div className="launch-container">
    

    <div className="launches-info">
        <h2>{name}</h2>
        <p>{start}</p>
        <p>{provider}</p>
      <p>{mission}</p>
        <p>{location}</p> 
    </div>
    
    </div>
    );
}
 
export default LaunchCard;