import React, { Component, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

const MapView = () => {
  const [location, setLocation] = useState(
    {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12
    }
  );
  const [markers, setMarkers] = useState(
        [
          {
            "description": "Schon",
            "name": "Bucht",
            "geometry": [52.520772, 13.472764]
          },
          {
            "description": "Schon seh",
            "name": "Rummels",
            "geometry": [52.510772, 13.462764]
          }
        ]
  );

  const [marker, setMarker] = useState('');

  function handleMarkers(e) {
    e.preventDefault();
    console.log('>>>', markers)
    setMarkers({
      ...markers, venues: [
        {
          "description": "Wasseet",
          "name": "Rummels",
          "geometry": [52.500772 + Math.random()/20, 13.372764+Math.random()/20]
        },
        {
          "description": "Wasseet",
          "name": "Rummels",
          "geometry": [52.500772 + Math.random()/20, 13.372764+Math.random()/20]
        }
      ]

    })
    console.log(markers.venues);
  }

  function handleAdd() {
    const newList = markers.concat(newMarker);
    setMarkers(newList);
  }

  const newMarker =
      {
        "description": "Wasseet",
        "name": "Rummels",
        "geometry": [52.550772, 13.472764]
      }

return (
  <>
    <Map center={location.currentLocation} zoom={location.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Markers venues={markers} />

    </Map>

    <button onClick={handleMarkers}> switch markers
      </button>

    <button onClick={ handleAdd }> add_marker_2
    </button>

  </>
);
}


export default MapView;
