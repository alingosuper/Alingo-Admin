import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 🟡 Custom Golden Marker Icon
const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LiveMap = () => {
  const position = [31.5204, 74.3587]; // Lahore Center (Default)

  return (
    <div style={{ height: '100%', width: '100%', borderRadius: '20px', overflow: 'hidden' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
        {/* Dark Mode Map Style */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; AlinGo Elite Systems'
        />

        {/* 🟡 Active Ride Marker */}
        <Marker position={position} icon={goldIcon}>
          <Popup>
            <div style={{color: '#000'}}>
              <b>Rider ID: TZ-99</b><br/>Status: Moving Fast
            </div>
          </Popup>
        </Marker>

        {/* 🔴 Alert Zone (Blinking Effect Circle) */}
        <Circle 
          center={[31.5300, 74.3500]} 
          radius={500} 
          pathOptions={{ color: '#ff4444', fillColor: '#ff4444', fillOpacity: 0.2 }} 
        />
      </MapContainer>
    </div>
  );
};

export default LiveMap;
