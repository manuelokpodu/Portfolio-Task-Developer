import React from "react";
import "../styles/aboutme.css";
import manImage from "../assets/images/aboutman.png";
const AboutMe = () => {
  return (
    <div className="main-container d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-5">
          <div className="col col-lg-6 image-con">
            <img
              className="img-fluid aboutmaan"
              src={manImage}
              alt="manImage"
            />
          </div>

          <div className="col col-lg-5 conn">
            <h3>About</h3>
            <h1>About Me</h1>
            <p>
              A developer with expertise in high-performance web applications.
              Skilled in modern technologies such as HTML, CSS, and JavaScript.
              I specialize in responsive design, ensuring seamless user
              experiences.
            </p>
            <br />
            <p>
              With a strong foundation in collaboration, and agile development,
              I am passionate about building solutions that are functional.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </p>
            <p>
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
