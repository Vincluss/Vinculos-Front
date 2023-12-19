"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { jobsData } from "./data/jobs";
import "leaflet/dist/leaflet.css";
import IconVinculos from "../../assets/logo-semfundo/6.png";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Icon } from "leaflet";
import L from "leaflet";
import defaultMarker from "leaflet/dist/images/marker-icon.png";


export default function Map() {
  const [isMounted, setIsMounted] = React.useState(false);

  const iconVinculos = new L.icon({ iconUrl: IconVinculos, iconSize: [32, 32] });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const [position, setPosition] = useState([
    -23.545497048645824, -46.63660925760619,
  ]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => {
          const { latitude, longitude } = userPosition.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user location", error);
        }
      );
    }
  }, []);

  return (
    isMounted && (
      <MapContainer
        center={position}
        zoom={10}
        style={{ height: "550px", width: "90%", margin: "1rem 0 2rem 0" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {jobsData.map((job) => (
          <Marker
            key={job.id}
            position={job.position}
            title={job.title}
            keyboard={true}
            alt={job.title}
          >
            <Popup>{job.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    )
  );
}
