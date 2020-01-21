import React, { Component } from "react";
import { Icon } from "antd";

import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        Footer
        <a href="mailto:appledcse@yahoo.com">
          <Icon type="mail" theme="filled" />
        </a>
        <a href="https://github.com/zseir/" target="_blank">
          <Icon type="github" />
        </a>
        <a href="https://www.linkedin.com/in/hui-lin-tay/" target="_blank">
          <Icon type="linkedin" theme="filled" />
        </a>
      </div>
    );
  }
}
