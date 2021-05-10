import React from 'react';
import './launchCard.css'

const LaunchCard = ({name, mission, provider, start, locationCountry, location}) => {
    return ( 
        <div className="launch-container">
    

    <div className="launches-info">
        <h2 className="launch-title">{name}</h2>
        <p className="launch-start">Launching {start}th</p>
        <p className="launch-location">{location} - {locationCountry}</p> 
        
      <p className="launch-description">{mission}</p>
      <p className="launch-provider">{provider}</p>
    </div>
    
    </div>
    );
}
 
export default LaunchCard;