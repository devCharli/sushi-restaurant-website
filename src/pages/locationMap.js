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
function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCenPxeDBr4DZi279Pi5O3UmLCPRWEc4ak">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={14}>
        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
