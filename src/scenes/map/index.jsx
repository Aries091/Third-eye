import React, { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const geojsonPath = "/assets/geoJSON-Nepal/nepal-districts-new.geojson";

const mapStyle = {
  width: "90%",
  height: "600px",
  margin: "10px auto",
};

const countryBounds = [
  [26.347, 80.058], // Southwestern corner
  [30.447, 88.201], // Northeastern corner
];

const center = [28.3949, 84.124]; // Kathmandu

const Map = () => {
  const [geoJSON, setGeoJSON] = React.useState(null);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      const response = await fetch(geojsonPath);
      const json = await response.json();
      setGeoJSON(json);
    };
    fetchGeoJSON();
  }, []);
  return (
    <MapContainer
      style={mapStyle}
      center={center}
      zoom={7}
      minZoom={7}
      maxBounds={countryBounds}
      maxBoundsViscosity={1.0}
    >
      {geoJSON && (
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      )}
      {geoJSON && (
        <GeoJSON
          data={geoJSON}
          style={() => {
            return {
              color: "black",
              weight: 1,
              fillColor: "grey",
              fillOpacity: 0.5,
            };
          }}
        />
      )}
    </MapContainer>
  );
};

export default Map;
