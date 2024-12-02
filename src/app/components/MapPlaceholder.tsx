'use client';

import React, { useState, useCallback } from 'react';
import { Map, Marker, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import './MapPlaceholder.css';
import busStops from './Markers';

const MapPlaceholder = ({ isLoaded }) => {
  const [mapCenter, setMapCenter] = useState({
    lat: 1.560588,
    lng: 103.635380
  });
  const [zoom, setZoom] = useState(15);

  const onCameraChanged = useCallback((ev: MapCameraChangedEvent) => {
    setMapCenter(ev.detail.center);
    setZoom(ev.detail.zoom);
  }, []);

  return (
    <div className="map-placeholder">
      {isLoaded ? (
        <Map
          zoom={zoom}
          center={mapCenter}
          mapId="e13a76220dccc6cd"
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          onCameraChanged={onCameraChanged}
        >
          {busStops.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
            />
          ))}
        </Map>
      ) : (
        <div className="map-text">Loading map...</div>
      )}
    </div>
  );
};

export default MapPlaceholder;

