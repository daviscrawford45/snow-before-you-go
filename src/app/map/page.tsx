'use client'

import React, { useEffect, useRef } from 'react';

function MapComponent() {
  const mapRef = useRef(null);
  const mapInstance = useRef<null|Object>(null)

  useEffect(() => {
      import('leaflet').then(L => {
        if (mapRef.current && !mapInstance.current) {
            var map = L.map(mapRef.current).setView([40.630, -111.616], 12);

            // found this tile layer here: https://gist.github.com/xantiagoma/39145a3042eca53a57ac3290a1a34973?permalink_comment_id=3415377
            L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }).addTo(map);

            // Brighton Weather Station
            var brighton_marker = L.marker([40.59936, -111.58167]).addTo(map);
            brighton_marker.bindPopup("<b>Brighton SNOTEL</b><br>Elevation: 8765.0 ft");

            // Alta Weather Station
            var alta_marker = L.marker([40.5905, -111.638]).addTo(map);
            alta_marker.bindPopup("<b>Alta - Guard House</b><br>Elevation: 8799.0 ft");

            // Solitude Weather Station
            var solitude_marker = L.marker([40.60081, -111.60364]).addTo(map);
            solitude_marker.bindPopup("<b>Solitude Summit</b><br>Elevation: 9641.0 ft");

            // Spruces Weather Station
            var spruces_marker = L.marker([40.641, -111.636]).addTo(map);
            spruces_marker.bindPopup("<b>Spruces</b><br>Elevation: 7402.0 ft");

            mapInstance.current = map;
        }
      });
    }, []);

  return <div id="map" ref={mapRef} />;
}

export default MapComponent;
