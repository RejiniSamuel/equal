import React from "react";
import { Route, NavLink } from "react-router-dom";
import TraitList from "./TraitList";
import Equalizer from "../components/Equalizer/Equalizer";
import Home from "./Home";

class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <div className="menu">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/TraitList">
            Traits Selection
          </NavLink>
          <NavLink exact to="/Equalizer">
            Character Equalizer
          </NavLink>
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/TraitList" component={TraitList} />
          <Route exact path="/Equalizer" component={Equalizer} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
