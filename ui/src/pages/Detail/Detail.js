// React
import React from "react";
import { connect } from "react-redux";

// Components
import MiniMap from "../../components/MiniMap/MiniMap";
import Error from "../../components/Error/Error";
import Button from "../../components/Button/Button";

// Css
import "./Detail.css";

function Detail({ park }) {
  if (!park) return <Error />;

  return (
    <div className="detail">
      <h1 className="detail__title">
        {`${park.name} in ${park.localization.name}`}
      </h1>
      <div className="detail__items">
        <div className="detail__map">
          <MiniMap park={park} />
        </div>
        <div className="detail__park">
          <h2 className="detail__park-title">Description</h2>
          <p className="detail__park-desc">{park.description}</p>
          <Button
            text={`Go to ${park.name.toLowerCase()} website`}
            to={park.url}
            isExternalLink
          />
          <Button text="Search more parks" to="/" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  park: state.selectedPark,
});

export default connect(mapStateToProps, null)(Detail);
