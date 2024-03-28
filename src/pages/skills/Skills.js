import React from "react";
import {
  BiLogoPython,
  BiLogoDjango,
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoFlask,
  BiLogoDocker,
  BiLogoJavascript,
  BiLogoAws,
} from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { SiApache } from "react-icons/si";
function Skills() {
  const animateIcons = (e) => {
    e.target.classList.add("animate__animated", "animate__heartBeat");
    setTimeout(() => {
      e.target.classList.remove("animate__animated", "animate__heartBeat");
    }, 1000);
  };

  return (
    <div
      class="container-fluid bg-light about-wrapper"
      style={{ minHeight: "25vh", position: "relative" }}
    >
      <div class="row justify-content-center align-items-center">
        <div class="col-md-8 text-center">
          <h3 class="display-5 pt-5">Skills</h3>
          <div class="d-flex flex-wrap justify-content-center">
            <div class="p-4">
              <BiLogoPython
                size="50"
                className=""
                onMouseEnter={animateIcons}
              />
              <p>Python</p>
            </div>
            <div class="p-4">
              <BiLogoDjango size="50" onMouseEnter={animateIcons} />
              <p>Django</p>
            </div>
            <div class="p-4">
              <BiLogoReact size="50" onMouseEnter={animateIcons} />
              <p>React</p>
            </div>
            <div class="p-4">
              <BiLogoPostgresql size="50" onMouseEnter={animateIcons} />
              <p>PostgreSQL</p>
            </div>
            <div class="p-4">
              <FcLinux size="50" onMouseEnter={animateIcons} />
              <p>Linux</p>
            </div>
            <div class="p-4">
              <BiLogoFlask size="50" onMouseEnter={animateIcons} />
              <p>Flask</p>
            </div>
            <div class="p-4">
              <BiLogoDocker size="50" onMouseEnter={animateIcons} />
              <p>Docker</p>
            </div>
            <div class="p-4">
              <BiLogoJavascript size="50" onMouseEnter={animateIcons} />
              <p>JavaScript</p>
            </div>
            <div class="p-4">
              <BiLogoAws size="50" onMouseEnter={animateIcons} />
              <p>AWS</p>
            </div>
            <div class="p-4">
              <SiApache size="50" onMouseEnter={animateIcons} />
              <p>Apache</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
