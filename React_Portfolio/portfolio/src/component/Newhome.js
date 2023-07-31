import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

export default function Newhome() {
  return (
    <div>
      <div className="about-page bg-secondary mt-2">
        <h2>About Me</h2>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
            vaibhawpandey0405@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            Phone: (123) 456-7890
          </p>
          <p>
            <FontAwesomeIcon icon={faTwitter} />
            Vaibhaw@123
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Location: Ghaziabad
            ,UttarPradesh
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>University Name - Dr. A.P.J Abdul Kalam Technical University</p>
          <p>Year - 2020-2024</p>
        </div>
        <div className="languages">
          <h3>Languages</h3>
          <p>English</p>
          <p>Hindi </p>
        </div>
      </div>

      <footer className="text-center my-4">
        <p style={{ color: "white" }}>Vaibhaw Pandey</p>
      </footer>
    </div>
  );
}
