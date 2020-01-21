import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Projects from "./Containers/Projects";
import Contact from "./Containers/Contact";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const navigation = [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Projects", path: "/projects", component: Projects },
    { name: "Contact", path: "/contact", component: Contact }
  ];
  return (
    <Router>
      {/* <div> */}
      <Header />
      <Switch>
        {navigation.map(nav => {
          return (
            <Route
              key={nav.name}
              exact
              path={nav.path}
              component={nav.component}
            />
          );
        })}
      </Switch>
      {/* <Footer />   */}
      {/* </div> */}
    </Router>
  );
}

export default App;
