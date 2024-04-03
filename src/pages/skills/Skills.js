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
import {
  SiApache,
  SiNginx,
  SiBootstrap,
  SiJquery,
  SiGithub,
  SiDigitalocean,
} from "react-icons/si";

import SkillItem from "./SkillItem";
function Skills() {
  return (
    <div
      className="container-fluid bg-light-subtle "
      style={{ position: "relative", minHeight: "fit-content" }}
    >
      <div
        className="row"
        style={{ borderTop: "10px solid rgba(15, 15, 15, 0.822)" }}
      >
        <h3 className="display-4 pt-5 ">Skills</h3>
        <p className="lead">
          I have experience in the following tools and technologies.{" "}
        </p>
      </div>
      <div className="row  justify-content-center align-items-center d-flex align-items-center">
        <div className="col-md-8 text-center d-flex justify-content-center align-items-center flex-wrap">
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
          <SkillItem Icon={SiJquery} text="Jquery" />
          <SkillItem Icon={SiGithub} text="Github" />
          <SkillItem Icon={SiDigitalocean} text="Digitalocean" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
