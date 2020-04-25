import React, { Component } from "react";
import Resume_TayHuiLin_250420 from '../../Assets/Resume_TayHuiLin_250420.pdf'

export default class About extends Component {
  render() {
    return (
      <div id="about" className="page-container">
        <div className="page-title">About Me</div>
        <div className="page-desc">
          Hello! I'm Hui Lin, a developer from Singapore.
          <br />
          <br />
          This is where I display my projects I've done in the course of my
          development journey. I enjoy learning about new technologies and creating things with them. I have special interests in web and mobile applications development and
          software engineering!
          <br />
          <br />
          More about my qualifications in my&nbsp;
          <a
            href={Resume_TayHuiLin_250420}
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
