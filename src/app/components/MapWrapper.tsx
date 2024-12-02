'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import MapPlaceholder from './MapPlaceholder';

const MapWrapper = () => {
  return (
    <APIProvider apiKey="AIzaSyBq3i7GAr8lKn4u8qCHX1DHd7Vvs6ocRIA">
      <MapPlaceholder isLoaded={true} />
    </APIProvider>
  );
};

export default MapWrapper;