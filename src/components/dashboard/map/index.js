import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, HeatMap, Marker } from "google-maps-react";
import "./styles.css";

const MapContainer = ({ posiciones }) => {
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

  return (
    <>
      <div className="map-container" style={{ width: "40%", height: "40%" }}>
        <Map
          style={{
            width: "700px",
            height: "300px",
            marginLeft: "35%",
            marginTop: "1%",
          }}
          google={window.google}
        >
          {/* {posiciones.length > 0 && (
            <HeatMap
              gradient={gradient}
              positions={posiciones}
              opacity={1}
              radius={10}
            />
          )} */}
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
