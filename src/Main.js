import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Waiter from "./Waiter";
import Chef from "./Chef";
//Aqui importamos nuestra imagen
import logo from './logo.png';
import fondo from './fondo.jpg';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <img className="img" alt="logo_burgerQueen" src={logo}/>
          <ul className="header">
            <li><NavLink exact to="/">Inicio</NavLink></li>
            <li><NavLink to="/waiter">Mesero</NavLink></li>
            <li><NavLink to="/chef">Cocinero</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/waiter" component={Waiter}/>
            <Route path="/chef" component={Chef}/>
          </div>
          <img className="fondo" alt="fondo_burgerQueen" src={fondo}/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;