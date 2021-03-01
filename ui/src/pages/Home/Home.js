// React
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Axios
import axios from "axios";

// Actions
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import actions from "../../actions";

// Components
import Map from "../../components/Map/Map";
import SlideBar from "../../components/SlideBar/SlideBar";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

// Css
import "./Home.css";

function Home({ parks, setPark, toggle, setToggle }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LARAVEL}/parks`, {
        headers: { "Content-Type": "application/json" },
      })
      .then(({ data }) => {
        setPark(data.data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !parks) {
    return <Error text="Something went wrong!" />;
  }

  return (
    <div className="canvas">
      <Map toggle={toggle} parks={parks} />
      <div
        aria-hidden="true"
        className={toggle ? "toggle-btn active" : "toggle-btn"}
        onClick={() => setToggle(!toggle)}
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
        <SlideBar parks={parks} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  parks: state.parks,
  toggle: state.toggle,
});

const mapDispatchToProps = {
  setPark: actions.setPark,
  setToggle: actions.setToggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
