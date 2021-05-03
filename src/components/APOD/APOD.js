import React, { useState, useEffect } from 'react';

import './APOD.css';
import fetchAPOD from '../../services/apod-api';

export default function APOD() {
    const [ apod, setApod ] = useState("")

    async function getAPOD() {
        const apodData = await fetchAPOD();
        setApod(apodData.data);
    }

    useEffect(() => {
        getAPOD();
    }, [])

    return (
        <div className="APOD">
            {apod ? (
            <>
                <h2 className="header-title">{apod.title}</h2>
                <img className="apod-img" src={apod.hdurl} alt={apod.title}/>
                <p className="apod-descrip">{apod.explanation}</p>
                </>
                ) : ( 
                    <>
                    <h1>Loading</h1>
                    </>
                )}
        </div>
    )
}
