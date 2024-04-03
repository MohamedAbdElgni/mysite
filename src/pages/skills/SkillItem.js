import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Animatediv from "../../components/Animatediv";

function SkillItem({ Icon, text }) {
  const animateIcons = (e) => {
    e.target.classList.add("animate__animated", "animate__flip");
    setTimeout(() => {
      e.target.classList.remove("animate__animated", "animate__flip");
    }, 1000);
  };

  return (
    <Animatediv>
      <div className="p-4 toscroll">
        <div onMouseEnter={animateIcons}>
          <Icon size={50} />
        </div>
        <p>{text}</p>
      </div>
    </Animatediv>
  );
}

export default SkillItem;
