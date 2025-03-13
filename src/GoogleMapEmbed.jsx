'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Restaurant coordinates
const RESTAURANT_COORDS = { lat: 6.52196878158467, lng: 3.366863837056762 };

function GoogleMapEmbed() {
  const mapRef = useRef(null);

  // Fix Leaflet icon issues
  useEffect(() => {
    // Fix the missing icon issue
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    // Force map to invalidate size after rendering
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 100);
    }
  }, []);

  // Create a custom restaurant icon
  const restaurantIcon = new L.DivIcon({
    html: `<div class="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>`,
    className: 'custom-restaurant-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div
      className="relative min-h-[400px] w-full overflow-hidden rounded-lg bg-white shadow-lg"
      style={{ transform: 'translateZ(0)', isolation: 'isolate' }}
    >
      {/* This empty div ensures the container has dimensions before the map loads */}
      <div className="absolute inset-0 z-[1] bg-white"></div>
      <MapContainer
        center={[RESTAURANT_COORDS.lat, RESTAURANT_COORDS.lng]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        ref={mapRef}
        className="relative z-[5]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[RESTAURANT_COORDS.lat, RESTAURANT_COORDS.lng]} icon={restaurantIcon}>
          <Popup>
            <div className="text-center font-medium">🍽️ Our Restaurant</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default GoogleMapEmbed;
