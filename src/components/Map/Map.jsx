import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

/**
 * Map component using Leaflet for displaying location
 * @param {Object} props - Component props
 * @param {number} props.lat - Latitude coordinate
 * @param {number} props.lng - Longitude coordinate
 * @param {string} props.title - Location title for popup
 * @param {string} props.address - Location address for popup
 * @param {string} props.className - Additional CSS classes
 */
const Map = ({ lat = 40.7484, lng = -74.0043, title = "Our Office", address = "123 Business Street, New York, NY 10001", className = "", fullWidth = false }) => {
  return (
    <div className={`${fullWidth ? 'w-full' : 'w-full'} ${fullWidth ? 'h-[500px]' : 'h-64'} ${fullWidth ? '' : 'rounded-lg'} overflow-hidden ${className}`}>
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
