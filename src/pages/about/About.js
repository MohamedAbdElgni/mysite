import React from "react";
import "./aboutstyle.css";
import Animatediv from "../../components/Animatediv";
import resume from "./MohamedAhmedAbdElGani_CV.pdf";
function About() {
  return (
    <div
      className="container-fluid bg-lightr"
      style={{
        height: "fit-content",
        position: "relative",
        borderTop: "10px solid rgba(15, 15, 15, 0.822)",
        textAlign: "center",
      }}
    >
      <div className="row h-100">
        <div className="col-md-4 d-flex justify-content-center align-items-center bg-light-subtle">
          <Animatediv>
            <img
              src="mypic.jpg"
              alt="mypic"
              className="shadow-lg animate__animated animate__jello"
              style={{ borderRadius: "50%", maxWidth: "200px", height: "auto" }}
            />
          </Animatediv>
        </div>

        <div className="col-md-8 right-sec bg-light-subtle">
          <div className="row">
            <Animatediv>
              <div className="col-12 d-flex justify-content-center align-items-center ">
                <h3 className="display-4">About Me</h3>
              </div>
            </Animatediv>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center ">
              <p className="lead">
                I'm a full stack web developer.I have experience in Python,
                Django, React, and PostgreSQL. I am currently working as a{" "}
                <strong> Full Stack Django Developer</strong> at{" "} <strong>Proact AI</strong>.
              </p>
            </div>
          </div>{" "}
          <Animatediv>
            <div className="row d-flex justify-content-center align-items-center pt-3">
              <a
                className="button-53 w-25"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download="MohamedAhmedAbdElGani_CV.pdf"
              >
                CV
              </a>
            </div>
          </Animatediv>
        </div>
      </div>
    </div>
  );
}

export default About;
