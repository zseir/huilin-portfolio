import React, { Component } from "react";
import "./index.css";
// import { Card } from "antd";

export default class ProjectDetail extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project-container">
        <div className="project-title">{project.name}</div>

        <div className="project-detail-container">
          <div className="image-container">
            <img src={project.image} alt="developer portfolio project" />
          </div>

          <div class="project-desc-container">
            <div className="project-desc">{project.description}</div>
            <br />
            <div className="project-language">Language: {project.language}</div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-link">View in Github</div>
              </a>
            )}
            </div>
        </div>
      </div>
      // <Card
      //   className="project-container"
      //   title={project.name}
      //   cover={<img src={project.image} />}
      // >
      //   <div className="project-desc">{project.description}</div>
      //   <br />
      //   <div className="project-language">Language: {project.language}</div>
      //   {project.link && (
      //     <a href={project.link} target="_blank" rel="noopener noreferrer">
      //       <div className="project-link">View in Github</div>
      //     </a>
      //   )}
      // </Card>
    );
  }
}
