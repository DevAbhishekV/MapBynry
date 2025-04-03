// src/MapComponent.js
import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { Style, Circle, Fill } from 'ol/style';

const MapComponent = ({ profile }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!profile) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([profile.longitude, profile.latitude]),
        zoom: 12,
      }),
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([profile.longitude, profile.latitude])),
    });

    marker.setStyle(
      new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({ color: 'blue' }),
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    map.addLayer(vectorLayer);

    return () => map.dispose(); // Cleanup on unmount
  }, [profile]);

  if (!profile) return <p>Select a profile to view the address.</p>;

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;