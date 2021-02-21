// React
import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Button.css";

function Button({ text, to, isExternalLink }) {
  return (
    <>
      {isExternalLink ? (
        <a href={to} className="button-link">
          <button type="button" className="button external-link">
            <p className="button__text">{text}</p>
          </button>
        </a>
      ) : (
        <Link to={to} className="button-link">
          <button type="button" className="button">
            <p className="button__text">{text}</p>
          </button>
        </Link>
      )}
    </>
  );
}

export default Button;
