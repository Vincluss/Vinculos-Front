'use client'

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { jobsData } from "./data/jobs";
import 'leaflet/dist/leaflet.css';

export const JobMap = () => {
    const [position, setPosition] = useState([-23.545497048645824, -46.63660925760619]);

    useEffect (() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((userPosition) => {
                const { latitude, longitude } = userPosition.coords
                setPosition([latitude, longitude]);
            }, (error) => {
                console.error('Error getting user location', error)
            })
        }
    }, [])

    return (       
        <MapContainer center={position} zoom={10} style={{ height: '550px', width: '85%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {jobsData.map((job) => (
                <Marker key={job.id} position={job.position}>
                    <Popup>{job.title}</Popup>
                </Marker>
            ))}
        </MapContainer>       
    )
}