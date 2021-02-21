// React
import React from "react";

// Css
import "./Error.css";

function Error({ text }) {
  return (
    <div className="error">
      <h3 className="error__text">{text || "404 Not Found"}</h3>
    </div>
  );
}

export default Error;
