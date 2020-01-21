import React, { Component } from "react";
import ProjectDetail from "../../Components/ProjectDetail";
import { projectList } from "../../constants";
import Grid from "antd/lib/card/Grid";
import { Row, Col } from "antd";

export default class Projects extends Component {
  render() {
    return (
      <div id="project" className="page-container">
        <div className="page-title">Projects</div>
        <p className="page-desc">
          Here are some of the projects I have done in my 3 years of
          polytechnic! It also includes some personal projects done for
          self-learning purposes.
          <br />
          More projects can be found on my&nbsp;
          <a
            href="https://github.com/zseir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          !
        </p>
        <Row gutter={16}>
          {projectList.map(project => (
            <Col span={8}>
              <ProjectDetail project={project} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
