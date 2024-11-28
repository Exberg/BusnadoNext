'use client';

import React from 'react';
import { GoogleMap, Marker} from '@react-google-maps/api';
import './MapPlaceholder.css';
import busStops from './Markers';

const MapPlaceholder = (props) => {
  const { isLoaded } = props;

  const mapContainerStyle = {
    width: '100%', 
    height: '500px', 
  };

  const mapCenter = { 
    lat: 1.5555, 
    lng: 103.6382 
  }; 

return (isLoaded && (
  <>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={mapCenter}
      mapId="e13a76220dccc6cd"
      zoom={15}
    >
      {busStops.map((marker) => {
        return (
          <div key={marker.id}>
            <Marker position={marker.position} title={marker.title} />
          </div>
        )
      })}
    </GoogleMap>
  </>
  )); 
};

export default MapPlaceholder;