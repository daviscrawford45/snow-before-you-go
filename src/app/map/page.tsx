'use client'

import React, { useEffect, useRef } from 'react';
import marker from './black_marker.png'

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

            var markerIcon = L.icon({
                iconUrl: 'red_marker.png',
            
                iconSize:     [60, 60], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });

            // Brighton Weather Station
            var brightonMarker = L.marker([40.59936, -111.58167], {icon: markerIcon}).addTo(map);
            brightonMarker.bindPopup("<b>Brighton SNOTEL</b><br>Elevation: 8765.0 ft");

            // Alta Weather Station
            var altaMarker = L.marker([40.5905, -111.638], {icon: markerIcon}).addTo(map);
            altaMarker.bindPopup("<b>Alta - Guard House</b><br>Elevation: 8799.0 ft");

            // Solitude Weather Station
            var solitudeMarker = L.marker([40.60081, -111.60364], {icon: markerIcon}).addTo(map);
            solitudeMarker.bindPopup("<b>Solitude Summit</b><br>Elevation: 9641.0 ft");

            // Spruces Weather Station
            var sprucesMarker = L.marker([40.641, -111.636], {icon: markerIcon}).addTo(map);
            sprucesMarker.bindPopup("<b>Spruces</b><br>Elevation: 7402.0 ft");

            //Aspen Grove Weather Station 40.404631/-111.604574
            var aspenGroveMarker = L.marker([40.404631, -111.604574], {icon: markerIcon}).addTo(map);
            aspenGroveMarker.bindPopup("<b>Aspen Grove</b><br>Elevation: 6880.0 ft");

            //Timpanogos Cave Weather Station 40.43524/-111.70741
            var timpCaveMarker = L.marker([40.43524, -111.70741], {icon: markerIcon}).addTo(map);
            timpCaveMarker.bindPopup("<b>Timpanogos Cave</b><br>Elevation: 8015.0 ft");

            mapInstance.current = map;
        }
      });
    }, []);

  return <div id="map" ref={mapRef} />;
}

export default MapComponent;
