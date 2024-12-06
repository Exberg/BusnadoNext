'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import MapPlaceholder from './MapPlaceholder';

const MapWrapper = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
      <MapPlaceholder isLoaded={true} />
    </APIProvider>
  );
};

export default MapWrapper;