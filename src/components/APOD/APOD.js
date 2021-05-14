import React, { useState, useEffect } from "react";
import "./APOD.css";
import fetchAPOD from "../../services/apod-api";

export default function APOD() {
  const [apod, setApod] = useState("");

  async function getAPOD() {
    const apodData = await fetchAPOD();
    setApod(apodData.data);
  }

  useEffect(() => {
    getAPOD();
  }, []);

  return (
    <div className="APOD">
      {apod ? (
        <>
          <h2 id="apod-title">{apod.title}</h2>
          <img className="apod-img" src={apod.hdurl} alt={apod.title} />

          <div class="des-box collapse" id="collapseExample">
            <p class="apod-descrip card card-body">{apod.explanation}</p>
          </div>

          <button
            className="btn btn-light read-more"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read more...
          </button>

          <a
            href="https://www.nasa.gov/multimedia/imagegallery/iotd.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light apod-gallery"
          >
            Gallery
          </a>
        </>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
}
