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
      { name: "Contact", path: "/contact" }
    ];
    return (
      <div id="header">
        <div className="nav-container">
          {navigation.map(nav => (
            <Link className="nav-item" to={nav.path}>
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="footer">&copy; {new Date().getFullYear()}, Hui Lin</div>
        {/* <Menu
          className="header-navigation"
          onClick={this.handleClick}
          selectedKeys={[this.state.keys]}
          mode="horizontal"
        >
          {navigation.map(nav => (
            <Menu.Item key={nav.name.toLowerCase()}>
              <Link to={nav.path}>{nav.name}</Link>
            </Menu.Item>
          ))}
        </Menu> */}
      </div>
    );
  }
}
