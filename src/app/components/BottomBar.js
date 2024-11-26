'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown, faRotate, faBusSimple } from "@fortawesome/free-solid-svg-icons";
import './BottomBar.css';

function BottomBar() {
  const [fromLocation, setFromLocation] = useState("Your Location");
  const [toLocation, setToLocation] = useState("To Bus Stop Civil");

  const busData = [
    { id: 1, name: "Bus F1", time: "5 mins" },
    { id: 2, name: "Bus G2", time: "10 mins" },
    { id: 3, name: "Bus F2", time: "12 mins" },
    { id: 4, name: "Bus G1", time: "22 mins" },
  ];

  return (
    <div className="bottom-bar open">
      <div className="w-12 h-1 bg-gray-400 rounded-full mx-auto my-2"></div>
      <div className="location-inputs">
        <div className="input-container">

          <input
            type="text"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            className="location-input from-location"
          />
          <input
            type="text"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            className="location-input to-location"
          />
        </div>
        <button className="exchange-button" style={{ color: 'black' }}>
          <FontAwesomeIcon icon={faArrowsUpDown} />
        </button>
      </div>
      <div className="bus-stop-info">
        <h2 className="bus-stop-title" style={({color: 'black'})}>
          Wait at <span className="highlight">Bus Stop CP</span>
        </h2>
        <div className="bus-stop-details">
          <span className="distance">80m</span>
          <button className="refresh-button">
            <span className="refresh-icon"><FontAwesomeIcon icon={faRotate} /></span> Refresh
          </button>
        </div>
      </div>
      <div className="bus-list">
        {busData.map((bus) => (
          <div key={bus.id} className="bus-item">
            <div className="bus-info">
              <span className="bus-icon" style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faBusSimple} />
              </span>
              <span className="bus-name">{bus.name}</span>
            </div>
            <span className="bus-time">{bus.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomBar;