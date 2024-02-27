'use client'

// import * as L from 'leaflet';
import React, { useEffect, useRef } from 'react';



// export default function LeafletMap() {

//     var map = L.map('map').setView([51.505, -0.09], 13);

//     return (
//         <>
//         </>
//     );
// }





// function MapComponent() {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       L.map(mapRef.current).setView([51.505, -0.09], 13);
//     }
//   }, []);

//   return <div id="map" ref={mapRef} style={{ height: "100vh", width: "100%" }} />;
// }

// export default MapComponent;





function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      import('leaflet').then(L => {
        if (mapRef.current) {
            var map = L.map(mapRef.current).setView([40.763, -111.873], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }
      });
    }
  }, []);

  return <div id="map" ref={mapRef} style={{ height: "600px", width: "1000px" }} />;
}

export default MapComponent;
