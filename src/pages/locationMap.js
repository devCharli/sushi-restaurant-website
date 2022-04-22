import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const position = {
  lat: -34.6673523,
  lng: 150.8504558,
};

const onLoad = (marker) => {
  // console.log("marker: ", marker);
};

const { REACT_APP_MAP_API } = process.env;

function Map() {
  return (
    <LoadScript googleMapsApiKey={REACT_APP_MAP_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={14}>
        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
