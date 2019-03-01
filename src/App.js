// client/src/App.js
import React from "react";
//import { Route } from "react-router-dom";
//import Roster from "./Roster";
//import TraitList from "./components/TraitList";
//import Header from "./components/Header";
//import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import logo from "./assets/logo_improv.png";
import "./App.css";

const App = () => (
  <div>
    <div id="content">
      <img alt="" src={logo} className="h4" title="" />
    </div>
    <Main />
  </div>
);

export default App;
