import React, { Component } from "react";
import { Icon } from "antd";

import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer">&copy; {new Date().getFullYear()}, Hui Lin</div>
      </div>
    );
  }
}
