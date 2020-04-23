import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="page-container">
        <div className="page-title">More ways to find me</div>
        <div className="page-desc">Feel free to contact me at my socials below!</div>
        <div className="contact-icons">
          <a href="mailto:appledcse@yahoo.com" rel="noopener noreferrer" title="email">
            <Icon type="mail" theme="filled" />
          </a>
          <a href="https://github.com/huilynt/" target="_blank" rel="noopener noreferrer" title="github">
            <Icon type="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/hui-lin-tay/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <Icon type="linkedin" theme="filled" />
          </a>
        </div>
      </div>
    );
  }
}
