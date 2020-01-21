import React, { Component } from "react";
import { Icon, Button } from "antd";
import "./index.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="page-container">
        <div className="page-title">More ways to find me</div>
        <div className="contact-icons">
          <a href="mailto:appledcse@yahoo.com" title="email">
            <Icon type="mail" theme="filled" />
          </a>
          <a href="https://github.com/zseir/" target="_blank" title="github">
            <Icon type="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/hui-lin-tay/"
            target="_blank"
            title="linkedin"
          >
            <Icon type="linkedin" theme="filled" />
          </a>
        </div>
      </div>
    );
  }
}
