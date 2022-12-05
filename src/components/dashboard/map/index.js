import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, HeatMap, Marker } from "google-maps-react";
import "./styles.css";

const MapContainer = ({ posiciones }) => {
  const [coordinates, setCoordinates] = useState([]);
  const [center, setCenter] = useState(null);
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 252, 212, 1)",
    "rgba(0, 252, 212, 1)",
    "rgba(0, 252, 212, 1)",
    "rgba(0, 252, 212, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(252, 212, 68, 1)",
    "rgba(252, 212, 68, 1)",
    "rgba(252, 212, 68, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  useEffect(() => {
    if (posiciones !== null) {
      if (coordinates.length === 0) {
        posiciones[0].forEach((p) => {
          coordinates.push({ lat: p[0], lng: p[1] });
        });
        let coord = {
          lat: posiciones[0][1],
          lng: posiciones[0][0],
        };
        coordinates.push({ lat: coord.lat[0], lng: coord.lat[1] });
        setCenter({ lat: coord.lat[0], lng: coord.lat[1] });
        setCoordinates(coordinates);
      }
    }
  }, [posiciones]);

  return (
    <>
      <div className="map-container" style={{ height: "40%" }}>
        <Map
          style={{
            width: "40%",
            height: "300px",
            marginLeft: "39%",
            marginTop: "1%",
          }}
          google={window.google}
          center={coordinates.length > 0 ? coordinates[0] : null}
        >
          {coordinates.length > 0 && (
            <HeatMap
              gradient={gradient}
              positions={coordinates}
              opacity={1}
              radius={10}
            />
          )}
          <Marker />
        </Map>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKlcg3KFkR5dPgq2JLkcDHP2Yq4moIcA4",
  libraries: ["visualization"],
  language: "es",
})(MapContainer);
