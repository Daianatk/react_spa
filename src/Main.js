import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./views/Home";
import Waiter from "./views/Waiter";
import Chef from "./views/Chef";
//Aqui importamos nuestra imagen
import logo from './img/logo.png';
 
const Main=()=> {
    return (
      <HashRouter>
        <div>
        <img className="logo" alt="logo_burgerQueen" src={logo}/>
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
        </div>
      </HashRouter>
    );
}
 
export default Main;