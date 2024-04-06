import React from "react";
import { Carousel } from "react-bootstrap";
import "./certsStyles.css";
//MohamedAhmedAbdElGani_CV.pdf
function Certs() {
  const certficates = 10;
  // cert_n.png
  return (
    <div
      className="container-fluid bg-light-subtle formobile"
      style={{
        height: "100vh",
        borderBottom: "10px solid rgba(15, 15, 15, 0.822)",
      }}
    >
      <h3 className="display-4 text-center p-5">Certificates</h3>
      <Carousel data-bs-theme="dark" className="">
        {[...Array(certficates)].map((e, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 cert-img"
              src={`cert_${i + 1}.png`}
              alt={`Cert-${i + 1}`}
              loading="lazy"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Certs;
