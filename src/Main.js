import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarinat";
import Yhteys from "./Yhteys";
import Json from "./Json"
import Card from "./JsonAPI.js"
import Card1 from "./JsonFetch.js"
import Bike from "./Bike"
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Perus Single Page Application (SPA)</h1>
            <ul className="header">
              <li><NavLink exact to="/">Koti</NavLink></li>
              {/* <li><NavLink to="/koti">Koti</NavLink></li> */}
              <li><NavLink to="/tarina">Tarinaa</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
              <li><NavLink to="/json">Json</NavLink></li>
              <li><NavLink to="/card">Card</NavLink></li>
              <li><NavLink to="/card1">Card1</NavLink></li>
              <li><NavLink to="/bike">Bike</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Koti}/>
              {/* <Route path="/koti" component={Koti}/> */}
              <Route path="/tarina" component={Tarina}/>
              <Route path="/yhteys" component={Yhteys}/>
              <Route path="/json" component={Json}/>
              <Route path="/card" component={Card}/>
              <Route path="/card1" component={Card1}/>
              <Route path="/bike" component={Bike}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;
