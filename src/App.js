import React from "react";

import "./App.css";
import HomePage from "./pages/homepage/home.component";
import ShopPage from "./pages/shop/shop.component";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} /> 
        <Route exact path='/signIn' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
