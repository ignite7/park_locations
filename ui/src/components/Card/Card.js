// React
import React from "react";
import { connect } from "react-redux";

// Actions
import actions from "../../actions";

// Components
import Button from "../Button/Button";

// Css
import './Card.css'

function Card({ park , setSelectedPark }) {
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedPark(park);
      }}
    >
      <h1 className="card__title">{`${park.name}, ${park.localization.name}`}</h1>
      <Button text="More info" to={`/${park.id}`} />
    </div>
  );
}

const mapDispatchToProps = {
  setSelectedPark: actions.setSelectedPark,
};

export default connect(null, mapDispatchToProps)(Card);
