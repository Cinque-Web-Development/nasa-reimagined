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
    {launch ? (
        <div className="rocket-container">
          <h2>Upcoming Launches</h2>
           <div className="image-container">
              <img className="rocket-img"src="images/project.png"/>
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
