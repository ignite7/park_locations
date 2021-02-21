// React
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Axios
import axios from "axios";

// Actions
import actions from "../../actions";

// Components
import Map from "../../components/Map/Map";
import SlideBar from "../../components/SlideBar/SlideBar";
//import Loading from "../../components/Loading/Loading";
//import Error from "../../components/Error/Error";

// Icons
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

// Css
import "./Home.css";

function Home({ parks, setParks }) {
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  //useEffect(() => {
  //  var obj = {
  //    method: "GET",
  //    mode: "no-cors",
  //    headers: {
  //      "Content-Type": "application/json",
  //      Origin: "",
  //    },
  //  };
  //  fetch("http://172.30.0.2/parks", obj)
  //    .then((response) => response.json())
  //    .then((data) => {
  //      setParks(data);
  //      setError(false);
  //    })
  //    .catch(() => setError(true));
  //  setIsLoading(false);
  //}, []);

  //if (isLoading) {
  //  return <Loading />;
  //}

  //if (error || !parks) {
  //  return <Error text="Something went wrong!" />;
  //}

  return (
    <div className="canvas">
      <Map toggle={toggle} parks={parks} />
      <div
        className={toggle ? "toggle-btn active" : "toggle-btn"}
        onClick={handleToggle}
      >
        {toggle ? (
          <BsArrowBarLeft className="toggle-btn__icon" />
        ) : (
          <BsArrowBarRight className="toggle-btn__icon" />
        )}
      </div>
      <div
        className={toggle ? "canvas__slide-bar active" : "canvas__slide-bar"}
      >
        <SlideBar parks={parks} handleToggle={handleToggle} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  parks: state.parks,
});

const mapDispatchToProps = {
  setParks: actions.serParks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
