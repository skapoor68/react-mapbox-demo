import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2thcG9vcjY4IiwiYSI6ImNsM3MzcDVqcjBtbHkzZW5rZ2M5cHp2MXgifQ.SQp-8XjQRxiLd1AFkWhIrQ';

function App() {
  const [viewState, setViewState] = useState({
    latitude: 33.53,
    longitude: -82.1306747,
    zoom: 11
  });

  return (
    <Map
      {...viewState}
      onMove={e => setViewState(e.viewState)}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker latitude={33.53} longitude={-82.1306747} color="red" />
    </Map>
  );
}

export default App;
