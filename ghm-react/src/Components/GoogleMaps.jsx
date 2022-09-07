import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 47.8093901,
  lng: 15.2866582,
};

export default function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    // Uncomment the line below and add your API key
    googleMapsApiKey: "AIzaSyANAu2DKd5EC7__ITsW9YLOMHncfzValXo",
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}>
      <Marker position={{ lat: 47.8093901, lng: 15.2866582 }} />
    </GoogleMap>
  );
}
