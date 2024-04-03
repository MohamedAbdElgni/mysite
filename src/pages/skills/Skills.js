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
import { SiApache, SiNginx, SiBootstrap } from "react-icons/si";

import SkillItem from "./SkillItem";
function Skills() {
  
  

  return (
    <div
      className="container-fluid bg-light about-wrapper"
      style={{ minHeight: "25vh", position: "relative" }}
      
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 text-center">
          <h3 className="display-5 pt-5">Skills</h3>
          <div className="d-flex flex-wrap justify-content-center">
            <SkillItem Icon={BiLogoPython} text="Python" />
            <SkillItem Icon={BiLogoDjango} text="Django" />
            <SkillItem Icon={BiLogoFlask} text="Flask" />
            <SkillItem Icon={BiLogoDocker} text="Docker" />
            <SkillItem Icon={BiLogoAws} text="AWS" />
            <SkillItem Icon={FcLinux} text="Linux" />
            <SkillItem Icon={SiApache} text="Apache" />
            <SkillItem Icon={SiNginx} text="Nginx" />
            <SkillItem Icon={BiLogoPostgresql} text="Postgresql" />
            <SkillItem Icon={BiLogoReact} text="React" />
            <SkillItem Icon={SiBootstrap} text="Bootstrap" />
            <SkillItem Icon={BiLogoJavascript} text="Javascript" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
