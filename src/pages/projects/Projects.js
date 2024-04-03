import React from "react";
import "./projects.css";
import Project from "../../components/Project";
function Projects() {
  return (
    <div
      className="container-fluid bg-danger "
      style={{ minHeight: "100vh" }}
    >
      <h3 className="display-4 text-center p-5">Projects</h3>

      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center align-items-center">
        <Project/>
        <Project/>
        <Project/>
        
      </div>
    </div>
  );
}

export default Projects;
