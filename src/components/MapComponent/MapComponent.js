'use client'

import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


const MapComponent = () => {
    return (
        <MapContainer center={[23.6943, 90.3444]} zoom={7} className='h-[500px] w-100 md:w-[40%]' >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[23.733867, 90.392938]} >
                {/* <Popup>10,000 people are connected from here</Popup> */}
                <Tooltip>10,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[24.848089450676945, 89.37292052730183]} >
                <Tooltip>2,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[24.374715, 88.600301]} >
                <Tooltip>6,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[25.749306, 89.259177]} >
                <Tooltip>1,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[24.905060615886768, 91.85994592972885]} >
                <Tooltip>6,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[24.905060615886768, 91.85994592972885]} >
                <Tooltip>6,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[22.375322458802057, 91.83480315753131]} >
                <Tooltip>8,000 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[22.837332502640756, 89.54013450041276]} >
                <Tooltip>6,300 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[25.622118414343444, 88.64361854394066]} >
                <Tooltip>1,300 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[24.74584927772709, 90.41744091720113]} >
                <Tooltip>1,700 people are connected from here</Tooltip>
            </Marker>
            <Marker position={[22.713179126727916, 90.34956638090306]} >
                <Tooltip>2,700 people are connected from here</Tooltip>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;