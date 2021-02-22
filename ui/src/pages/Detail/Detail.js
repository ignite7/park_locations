// React
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

// Axios
import axios from "axios";

// Components
import MiniMap from "../../components/MiniMap/MiniMap";
import Error from "../../components/Error/Error";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

// Css
import "./Detail.css";

function Detail() {
  const { id } = useParams()
  const [park, setPark] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LARAVEL}/parks/${id}`)
      .then(({ data }) => {
        setPark(data);
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

  if (error || !park) {
    return <Error text="Something went wrong!" />;
  }

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

export default Detail;
