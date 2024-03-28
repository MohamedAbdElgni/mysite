import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleComponent = () => {
  const options = useMemo(
    () => ({
      background: {
        color: "black"
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "grab"
          }
        },
        modes: {
          push: {
            distance: 200,
            duration: 15
          },
          grab: {
            distance: 150
          }
        }
      },
      particles: {
        color: {
          value: ["#03dac6", "#ff0266", "#000000"],
          maxParticles: 43,
          connectParticles: false
        },
        links: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1.5
        },
        move: {
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: true,
          speed: 1
        },
        number: {
          density: {
            enable: true
          },
          value: 150
        },
        opacity: {
          value: 1.5
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true
    }),
    []
  );
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticleComponent;
