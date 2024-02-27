'use client'

import React, { useEffect, useRef } from 'react';

function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      import('leaflet').then(L => {
        if (mapRef.current) {
            var map = L.map(mapRef.current).setView([40.630, -111.616], 12);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }
      });
    }
  }, []);

  return <div id="map" ref={mapRef} />;
}

export default MapComponent;
