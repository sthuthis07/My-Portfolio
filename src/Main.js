import React, { Component } from "react";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <nav>
          <div class="nav-wrapper">
            <img
              src={require("./me.jpg")}
              alt=""
              class="circle"
              style={{ width: 60, height: 60, float: "left" }}
            />
            <Link className="brand-logo" to="/" style={{ left: 680 }}>
              Sthuthi S
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
