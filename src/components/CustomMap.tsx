import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";

interface CustomMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
  tileUrl?: string;
}

const CustomMap: React.FC<CustomMapProps> = ({
  latitude,
  longitude,
  zoom = 13, // Default zoom level
  className = "h-full w-full rounded-lg", // Default styling
  tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // Default tile layer
}) => {
  if (!latitude || !longitude) {
    return (
      <div className="text-center p-4">
        <p>Invalid location coordinates.</p>
      </div>
    );
  }

  return (

    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      className={className}
      aria-label={`Map centered at latitude ${latitude} and longitude ${longitude}`}
    >
      <TileLayer
        url={tileUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default React.memo(CustomMap);