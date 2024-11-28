'use client';

import Drawer from './components/Drawer.tsx'
import MapPlaceholder from './components/MapPlaceholder.js'
import { mapOptions } from './components/MapConfig';
import { useJsApiLoader } from '@react-google-maps/api';

export default function Page() {

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  })
  return (
    <div>
      <MapPlaceholder isLoaded={isLoaded} />
      <Drawer />
    </div>
  )
}
 