import React, { Component } from "react";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="page-container">
        <div class="home-container"><div className="home-title">Hi, I'm Hui Lin!</div>
          <div className="home-desc">
            I'm a developer from Singapore.
            <br />
            Welcome to my portfolio!
          </div>
        </div>
      </div>
    );
  }
}
