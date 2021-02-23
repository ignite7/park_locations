// React
import React from "react";
import { connect } from "react-redux";

// Actions
import actions from "../../actions";

// Google Maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// Components
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

// Map style
import mapStyle from "../../assets/map";

// Images
import mapIcon from "../../assets/images/logo.png";

// Css
import "./Map.css";

// Map
const center = { lat: 33.19485288610493, lng: -38.462269425781216 };
const options = {
  styles: mapStyle,
  streetViewControl: false,
  mapTypeControl: false,
  maxZoom: 8,
  minZoom: 3,
};

function Map({ parks, toggle, selectedPark, setSelectedPark }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  if (loadError) return <Error text="Something went wrong." />;
  if (!isLoaded) return <Loading />;

  return (
    <GoogleMap
      mapContainerClassName={toggle ? "canvas__map active" : "canvas__map"}
      zoom={3}
      center={center}
      options={options}
    >
      {parks.map((park) => (
        <Marker
          key={park.id}
          position={{ lat: park.localization.lat, lng: park.localization.lng }}
          icon={{
            url: mapIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}
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
            <Button text="More info" to={`/${selectedPark.id}`} />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const mapStateToProps = (state) => ({
  selectedPark: state.selectedPark,
});

const mapDispatchToProps = {
  setSelectedPark: actions.setSelectedPark,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
