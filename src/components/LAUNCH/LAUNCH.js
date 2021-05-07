import React, { useState, useEffect } from "react";
import "./LAUNCH.css";
import fetchLaunch from "../../services/launches-api";
import LaunchCard from "./launchCard";

export default function LAUNCH() {
  const [launch, setLaunch] = useState("");

  async function getLAUNCH() {
    const launchData = await fetchLaunch();
    setLaunch(launchData.data.results);
  }

  useEffect(() => {
    getLAUNCH();
  }, []);

  return (
    <>
      {launch ? (
        <div>
          {launch.map((l, idx) => {
            return (
              <LaunchCard
                key={idx}
                // name={l.name}
                // mission={l.mission.description}
                // type={l.mission.type}
                // start={l.window_start}
                // end={l.window_end}
                // image={l.image}
                // location={l.pad.location.name}
              />
            );
          })}
        </div>
      ) : (
        "loading.."
      )}
    </>
  );
}
