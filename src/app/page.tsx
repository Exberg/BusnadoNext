'use client'
import Drawer from './components/Drawer.tsx'
import MapPlaceholder from './components/MapPlaceholder.js'

export default function Page() {
  return (
    <div>
      <MapPlaceholder />
      <Drawer />
    </div>
  )
}