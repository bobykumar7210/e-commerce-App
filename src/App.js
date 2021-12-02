import React, { Component } from "react";

import "./App.css";
import HomePage from "./pages/homepage/home.component";
import ShopPage from "./pages/shop/shop.component";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {auth} from './firebase/firebase.util.jsx'
class  App extends Component {
     constructor(props){
       super(props);
       this.state={
         currentUser:null
       }
     }
     unsubscribesFromAuth=null
     componentDidMount(){
        this.unsubscribesFromAuth=auth.onAuthStateChanged(user=>{
           this.setState({currentUser:user})
           console.log("user : ",user);
        })
     }
     componentWillUnmount(){
       this.unsubscribesFromAuth()
       console.log(" unsub",this.state.currentUser);
     }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} /> 
          <Route exact path='/signIn' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
