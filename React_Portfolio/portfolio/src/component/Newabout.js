import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Newabout() {
  return (
    <>
      <div id="about" className="bg-dark mt-2">
        <div class="container">
          <div class="row">
            <div class="about-col-1 d-flex justify-content-center ">
              <img src="image/my.jpeg" />
            </div>
            <div class="about-col-2">
              <h1 class="sub-title">About Me</h1>
              <p style={{ color: "white" }}>
                My name is Vaibhaw Pandey ,I am a Front-End Web Developer and i
                am Pursuing Bachelors’s Degree in Computer Science from Dr. A.
                P. J. Abdul Kalam Technical University. I have extensive
                experience in HTML, CSS, JavaScript , AJAX ,React JS &
                Bootstrap. I am learning MongoDB, Express, Node to become Full
                Stack Developer. I also possess skills in writing complex SQL
                queries using popular database servers such as MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center my-2">
        <p style={{ color: "white" }}>Vaibhaw Pandey</p>
      </footer>
    </>
  );
}
