import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="page-container">
        <div className="page-title">About Me</div>
        <div className="page-desc">
          Hello! I'm Hui Lin, a Singaporean web developer, currently in my 3rd
          year of studies in Ngee Ann Polytechnic's Information Technology. I
          have special interests in web and mobile applications development and
          software engineering!
          <br />
          <br />
          This is where I display my projects I've done in the course of my
          development journey :)
          <br />
          <br />
          More about my qualifications in my&nbsp;
          <a
            href="https://drive.google.com/file/d/1pcZ2O3Tn-5FgJu-CZ8S2KxqPmg5R9H6h/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          !
        </div>
      </div>
    );
  }
}
