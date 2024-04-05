import React from "react";
import Animatediv from "../../components/Animatediv";
import "./hiremesytles.css";
function HireMe() {
  return (
    <div
      className="container-fluid bg-light-subtle formobile"
      style={{
        height: "50vh",
      }}
    >
      <h3 className="display-4 text-center p-5">Hire Me</h3>
      <Animatediv>
        <div
          className="row 
      text-center 
      justify-content-center
      align-items-center
      d-flex
      align-items-center
      flex-wrap
      gap-3
      "
        >
          <div className="col-md-3 on-hov">
            <a
              href="https://mostaql.com/u/mohamed8788"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="mostaqel.png"
                alt="mostaql"
                className="img-fluid"
                style={{
                  width: "80px",
                }}
              />
            </a>
          </div>

          <div className="col-md-3 on-hov">
            <a
              href="https://www.linkedin.com/in/mohamedahmed878/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="linkedin.png"
                alt="mostaql"
                className="img-fluid"
                style={{
                  width: "80px",
                }}
              />
            </a>
          </div>

          <div className="col-md-3  on-hov">
            <a
              href="https://www.freelancer.com/u/MohamedAhmed878"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="freelancer.png"
                alt="mostaql"
                className="img-fluid"
                style={{
                  width: "80px",
                }}
              />
            </a>
          </div>
        </div>
      </Animatediv>
    </div>
  );
}

export default HireMe;
