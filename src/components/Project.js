import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

import Animatediv from "./Animatediv";
function Project({ props }) {
 
  return (
    <Animatediv>
      <div className="tile">
        <img
          alt="project"
          src={props.img}
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
        />
        <div className="text">
          <h2 className="animate-text">{props.name}</h2>
          <p className="animate-text">{props.description}</p>
          <div className="ainmate-text link">
            <a href={props.github} target="_blank" rel="noreferrer">
              <FaGithub size="2em" className="icon" />
            </a>
            {props.link !== "" ? (
              <a href={props.link} target="_blank" rel="noreferrer">
                <CiLink size="2em" className="icon" />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Animatediv>
  );
}

export default Project;
