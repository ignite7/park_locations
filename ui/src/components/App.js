// React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Layout from "./Layout";
import Error from "../components/Error/Error"

// Pages
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Detail} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
