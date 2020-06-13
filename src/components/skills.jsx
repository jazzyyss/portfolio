import React, { Component } from "react";

class Skills extends Component {
  state = {
    workedWith: [
      "html",
      "css",
      "sass",
      "php",
      "sql",
      "javascript",
      "ajax",
      ".Net",
      "angularJS",
      "node.js",
      "mongodb",
    ],
    workingWith: ["MERN stack", "React"],
  };
  render() {
    const { workedWith, workingWith } = this.state;
    return (
      <div className="skills">
        <div className="workingWith">
          <h1>Working With:</h1>
          <ul>
            {workingWith.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="workedWith">
          <h1>Worked With:</h1>
          <ul>
            {workedWith.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Skills;
