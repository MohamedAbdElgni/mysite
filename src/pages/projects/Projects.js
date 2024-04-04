import React from "react";
import "./projects.css";
import Project from "../../components/Project";
function Projects() {
  const projects = [
    {
      name: "Med Care",
      description: "Appintment booking system for doctors and patients",
      img: "medcare.png",
      github: "https://github.com/MohamedAbdElgni/Med-Care-Api/",
      link: "",
    },
    {
      name: "Stock Prediction",
      description:
        "Predict stock prices using Arima model (real-time) updated every day",
      img: "stocks.png",
      github: "https://github.com/MohamedAbdElgni/MLStockArpred",
      link: "https://mohamedabdelgni-mlstockarpred-deploy-ho85w7.streamlit.app/",
    },
    {
      name: "DBMS",
      description: "A database management system Using Bash Script",
      img: "bash.png",
      github: "https://github.com/MohamedAbdElgni/bash-dbms",
      link: "",
    },
    {
      name: "Crowd Funding",
      description:
        "A crowd funding platform for charity organizations to collect donations",
      img: "funding.png",
      github: "https://github.com/MohamedAbdElgni/Crowd-Funding",
      link: "",
    },
    {
      name: "E-Commerce",
      description: "An e-commerce platform for selling products using React",
      img: "e-comm.png",
      github: "https://github.com/MohamedAbdElgni/react-ecom",
      link: "",
    },
    {
      name: "Odoo HMS",
      description: "A hospital management custom addon for odoo17",
      img: "odoo.png",
      github: "https://github.com/MohamedAbdElgni/odoo-custom-addons",
      link: "",
    },
  ];
  return (
    <div
      className="container-fluid bg-light-subtle 
      d-flex flex-column justify-content-center align-items-center
      p-xl-5 p-lg-5 p-md-5
      pb-5
      "
      style={{
        minHeight: "90vh",
        borderTop: "10px solid rgba(15, 15, 15, 0.822)",
        borderBottom: "10px solid rgba(15, 15, 15, 0.822)",
      }}
    >
      <h3 className="display-4 text-center p-3">Projects</h3>

      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {projects.map((project, index) => (
          <div className="col">
            <Project key={index} props={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
