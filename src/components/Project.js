import React from "react";
import { FaGithub } from "react-icons/fa";
import Animatediv from "./Animatediv";
function Project({ props }) {
  return (
    <Animatediv>
    <div class="tile">
      <img src="https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80" />
      <div class="text">
        <h2 class="animate-text">Project subtitle</h2>
        <p class="animate-text">
          project description 
          sadsadsa
          
        </p>
        <div class="ainmate-text link">
        <FaGithub size="2em" class="icon"/>
        </div>

        
      </div>
    </div>
    </Animatediv>
  );
}

export default Project;
