import React from "react";
import "../styles/about.css";
import JohnDev from "../assets/images/man.png";
const About = () => {
  return (
    <div className="about-bg align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between gap-5 this-con ">
          <div className="col col-lg-6 ">
            <h3>Hey, I am Manuel</h3>
            <h2>
              I develop dynamic and <br /> User-Centered Web <br /> Applications
            </h2>{" "}
            <p>
              My expertise spans both front-end and back-end development,
              <br />
              enabling me to build comprehensive solutions that meet diverse{" "}
              <br />
              client needs.
            </p>
            <button> Get In Touch</button>
          </div>
          <div className="col col-lg-5 image-content">
            <img className="image-man img-fluid" src={JohnDev} alt="John Dev" />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="col-lg-6 col"></div> */
}

{
  /* <div className="col-lg-5 col image-con"> */
}

export default About;
