'use client';

import React from 'react';
import './MapPlaceholder.css';
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function MapPlaceholder() {

  return (
    <LoadScript googleMapsApiKey='AIzaSyBq3i7GAr8lKn4u8qCHX1DHd7Vvs6ocRIA'>
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: '100%', height: '600px' }}
        zoom={16}
        center={{ lat: 1.5555, lng: 103.6382}}
        />
    </LoadScript>

  );
}

export default MapPlaceholder;