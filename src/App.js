import React from "react";

import "./App.css";
import HomePage from "./pages/homepage/home.component";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

export default App;
