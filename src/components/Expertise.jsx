import React from "react";
import "../styles/expertise.css";
import mobDesign from "../assets/images/mobile.png";
import frontend from "../assets/images/frontend.png";
import testandDebug from "../assets/images/testing.png";
import cloudService from "../assets/images/cloud.png";
const Expertise = () => {
  return (
    <div className="container expertise-container ">
      <h3>My Skills</h3>
      <h1 className="mt-4">My Expertise</h1>

      <div className="expertise-inner-con">
        <div className="first-inner">
          <div>
            <img src={mobDesign} alt="mobDesign" />
          </div>
          <h2>Responsive Design</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p> */}
          <p>
            Expert in creating responsive web designs that adapt seamlessly
            across all devices and screen sizes.
          </p>
        </div>

        <div className="inner-con-each">
          <div>
            <img src={frontend} alt="frontend" />
          </div>
          <h2>Front-End Frameworks</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p> */}
          <p>
            Proficient in building responsive user interfaces using front-end
            frameworks like React and Angular.js.
          </p>
        </div>

        <div className="inner-con-each">
          <div>
            <img src={testandDebug} alt="testandDebug" />
          </div>
          <h2>Testing and Debugging</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p> */}
          <p>
            Proficient in test-driven development. to maintain high-quality code
            through automated testing.
          </p>
        </div>

        <div className="inner-con-each">
          <div>
            <img src={cloudService} alt="cloudService" />
          </div>
          <h2>Cloud Services</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p> */}
          <p>
            Proficient in using cloud services like AWS EC2, S3 Cloud Storage to
            build scalable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
