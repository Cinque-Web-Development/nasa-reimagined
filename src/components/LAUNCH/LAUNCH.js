import React, { useState, useEffect } from "react";
import "./LAUNCH.css";
import fetchLaunch from "../../services/launches-api";
import LaunchCard from "./launchCard";

export default function LAUNCH() {
  const [launch, setLaunch] = useState("");

  async function getLAUNCH() {
    const launchData = await fetchLaunch();
    setLaunch(launchData.data.result);
  }

  useEffect(() => {
    getLAUNCH();
  }, []);

  return (
    <>
     <h2 id="upcoming-launches">Upcoming Launches</h2>
    {launch ? (
        <div className="rocket-container">
         
           <div className="image-container">
              <img className="rocket-img"src="images/launch.jpg"/>
          </div>
          {launch.map((l, idx) => {
            return ( 
              <>
             
            <LaunchCard
               key={idx}
              name={l.name}
             mission={l.launch_description}
            provider={l.provider.name}
                start={l.date_str}
            
             location={l.pad.location.name}
             locationCountry={l.pad.location.country}
            />
            </>
            );
          })}
        </div>
      ) : (
        "loading.."
      )} 
   
    </>
  );
}
