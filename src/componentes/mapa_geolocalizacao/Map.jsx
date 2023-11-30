'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = ({ center, zoom, jobs }) => {
    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {jobs.map((job, index) => (
                <Marker key={index} position={job.location}>
                    <Popup>{job.title}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}