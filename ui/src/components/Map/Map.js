// React
import React from "react";
import { connect } from "react-redux";

// Actions
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import actions from "../../actions";

// Google Maps

// Components
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

// Map style
import mapStyle from "../../assets/map";

// Images
import mapIcon from "../../assets/images/map_logo.png";

// Css
import "./Map.css";

// Map
const center = { lat: 33.19485288610493, lng: -38.462269425781216 };
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  maxZoom: 10,
  minZoom: 3,
  options: { zoomControl: true },
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
      <div className={toggle ? "map__title active" : "map__title"}>
        <h1>Airparx in +30 countries</h1>
      </div>
      <MarkerClusterer>
        {(clusterer) =>
          parks.map((park) => (
            <Marker
              key={park.id}
              position={park.localization}
              clusterer={clusterer}
              icon={{
                url: mapIcon,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              onClick={() => {
                setSelectedPark(park);
              }}
            />
          ))}
      </MarkerClusterer>
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
            <h1 className="map__card-title">
              {selectedPark.name}
              ,
            </h1>
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
