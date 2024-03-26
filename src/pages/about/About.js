import React from "react";
import "./aboutstyle.css";
function About() {
  return (
    <div
      className="container-fluid bg-light about-wrapper"
      style={{ minHeight: "25vh", position: "relative" }}
    >
      <div className="row h-100">
        <div className="col-md-4 d-flex justify-content-center align-items-center bg-light-subtle">
          <img
            src="mypic.jpg"
            alt="mypic"
            className="shadow-lg animate__animated animate__jello"
            style={{ borderRadius: "50%", maxWidth: "200px", height: "auto" }}
          />
        </div>
        <div className="col-md-8 right-sec">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center ">
              <h3 className="display-4">About Me</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center ">
              <p className="lead">
                I am a full stack web developer. I have experience in Python,
                Django, React, and PostgreSQL. I am currently working as a{" "}
                <strong> Free Lancer</strong> and looking for a full-time job.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center pt-3">
            <a
              href="MohamedAhmedAbfElGani.pdf"
              download="MohamedAhmedAbfElGani.pdf"
              className="button-53 w-25"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
