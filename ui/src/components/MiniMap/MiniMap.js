// React
import React, { useState } from "react";

// Google Maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// Components
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

// Map style
import mapStyle from "../../assets/map";

// Images
import mapIcon from "../../assets/images/logo.png";

// Css
import "./MiniMap.css";

// Map
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  maxZoom: 10,
  minZoom: 8,
  options: { zoomControl: true },
};

function MiniMap({ park }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  if (loadError) return <Error text="Something went wrong." />;
  if (!isLoaded) return <Loading />;

  return (
    <GoogleMap
      mapContainerClassName="mini-map"
      zoom={10}
      center={{ lat: park.localization.lat, lng: park.localization.lng }}
      options={options}
    >
      <Marker
        position={{ lat: park.localization.lat, lng: park.localization.lng }}
        icon={{
          url: mapIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        }}
        onClick={() => {
          setSelectedPark(park);
        }}
      />
      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.localization.lat,
            lng: selectedPark.localization.lng,
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div className="map__card">
            <h1 className="map__card-title">{selectedPark.name}</h1>
            <h2 className="map__card-text">{selectedPark.localization.name}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default MiniMap;
