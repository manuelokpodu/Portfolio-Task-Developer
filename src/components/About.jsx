import React from "react";
import "../styles/about.css";
import JohnDev from "../assets/images/man.png";
const About = () => {
  return (
    <div className="about-con d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row  justify-content-between align-items-center gap-5 ">
          <div className="col-lg-6 col">
            <h3>Hey, I am Manuel</h3>
            <h2>
              I develop dynamic and <br /> User-Centered Web <br /> Applications
            </h2>
            <p>
              My expertise spans both front-end and back-end development,
              <br />
              enabling me to build comprehensive solutions that meet diverse
              <br />
              client needs.
            </p>
            <button> Get In Touch</button>
          </div>
          <div className="col-lg-5 col image-con">
            <img className="image-man img-fluid" src={JohnDev} alt="JohnDev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
