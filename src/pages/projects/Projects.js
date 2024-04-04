import React from "react";
import "./projects.css";
import Project from "../../components/Project";
function Projects() {
  const projects = [
    {
      name: "Med Care",
      description: "Appintment booking system for doctors and patients",
      img: "medcare.png",
      github: "https://github.com",
    },
    {
      name: "Project 1",
      description: "This is a project description",
      img: "img.png",
      github: "https://github.com",
    },
  ];
  return (
    <div
      className="container-fluid bg-light-subtle "
      style={{
        minHeight: "100vh",
        borderTop: "10px solid rgba(15, 15, 15, 0.822)",
      }}
    >
      <h3 className="display-4 text-center p-5">Projects</h3>

      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center align-items-center">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
