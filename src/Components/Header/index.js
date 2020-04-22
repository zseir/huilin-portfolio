import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import { Menu } from "antd";

export default class Header extends Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const navigation = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Blog", href: "https://tayhuilin.wixsite.com/portfolio"},
      { name: "Contact", path: "/contact" }
    ];
    return (
      <div id="header">
        <div className="nav-container">
          {navigation.map(nav => {
            if (nav.path) {
              return <Link className="nav-item" to={nav.path}>
              <span>{nav.name}</span>
            </Link>
            } 
            else {
              return <a className='nav-item' target="_blank" href={nav.href}>{nav.name}</a>
            }
            })}
        </div>
      </div>
    );
  }
}
