// React
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// App
import App from "./components/App";

// Context
import store from "./context";

// Css
import "./assets/styles/mobile.css";
import "./assets/styles/desktop.css";

// DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
