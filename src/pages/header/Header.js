import { useState, useEffect } from "react";
import ParticleComponent from "../../components/particles";
import "./header.css";
import {
  PiWhatsappLogo,
  PiLinkedinLogoLight,
  PiGithubLogoDuotone,
} from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

function Header() {
  const [contactClicked, setContactClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.target.classList.add("animate__animated", "animate__flip");
    setTimeout(() => {
      e.target.classList.remove("animate__animated", "animate__flip");
    }, 1000);
  };

  const handleContactClick = () => {
    setContactClicked(!contactClicked);
  };

  const socialIcons = (
    <div
      className="text-light text-center d-flex justify-content-evenly social-icons animate__animated animate__fadeIn animate__delay-.5s"
      style={{
        position: "absolute",
        bottom: "18%",
        width: "100%",
        boxSize: "border-box",
      }}
    >
      <div className="w-sm-100 w-25 d-flex justify-content-center justify-content-sm-between  ">
        <a
          href="https://api.whatsapp.com/send?phone=01098557840"
          target="_blank"
          rel="noreferrer"
        >
          <PiWhatsappLogo
            size={30}
            className="animate__animated animate__heartBeat"
          />
        </a>
        <a href="mailto:YOUR_EMAIL">
          <TfiEmail
            size={30}
            className="animate__animated animate__heartBeat"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamedahmed878/"
          target="_blank"
          rel="noreferrer"
        >
          <PiLinkedinLogoLight
            size={30}
            className="animate__animated animate__heartBeat"
          />
        </a>
        <a
          href="https://github.com/MohamedAbdElgni"
          target="_blank"
          rel="noreferrer"
        >
          <PiGithubLogoDuotone
            size={30}
            className="animate__animated animate__heartBeat"
          />
        </a>
      </div>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.querySelector(".button-89");
      element.classList.add("animate__animated", "animate__pulse");
      setTimeout(() => {
        element.classList.remove("animate__animated", "animate__pulse");
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center animate__animated animate__backInDown">
      {/* <ParticleComponent /> */}
      <div className="row w-100">
        <div className="col-12 col-sm-12 d-flex justify-content-center align-items-center flex-column">
          <div className="text-center p-4 rounded">
            <img
              src="Python-Logo.png"
              alt="Python Logo"
              style={{
                width: "15rem",
                zIndex: 1,
                cursor: "pointer",
                position: "relative",
              }}
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 d-flex justify-content-center align-items-center flex-column">
          <div
            className="text-center p-4 rounded"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h1 className="text-white mb-3 ">I'm Mohammed Ahmed</h1>
            <p className="text-white mb-4">Full Stack Python Developer</p>
            <button className="button-89" onClick={handleContactClick}>
              Contact Me
            </button>
          </div>
          {contactClicked && socialIcons}
        </div>
      </div>
    </div>
  );
}

export default Header;
