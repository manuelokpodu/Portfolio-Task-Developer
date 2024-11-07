import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div className="container the-containerr">
      <div className="text-center sec-contact-con mt-5">
        <h3 className="mb-3">Get In Touch</h3>
        <h1 className="fs-2">Contact me</h1>
        <p className="fs-6 do-you">
          Do you have a question? or are you interested in working with my team?
          Fill out the from fields below.
        </p>
      </div>

      <form>
        <div className="d-flex gap-5 flex-column details-con">
          <div className="d-flex  swipe-div">
            <div>
              <label htmlFor="first-name" className="form-label">
                {" "}
                First name{" "}
              </label>
              <input type="name" id="first-name" className=" form-control  " />
            </div>

            <div>
              <label htmlFor="last-name" className="form-label">
                {" "}
                Last name{" "}
              </label>
              <input type="name" id="last-name" className=" form-control" />
            </div>
          </div>

          <div className="d-flex  address-no ">
            <div>
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <input type="email" id="email" className=" form-control" />
            </div>
            <div className="phonenumber-contents">
              <label htmlFor="telephone" className="form-label ">
                Phone number
              </label>

              <input type="tel" id="telephone" className=" form-control" />
            </div>
          </div>

          <div className="d-flex  coverr ">
            <div>
              <label htmlFor="testing" className="form-label">
                Message
              </label>
              <textarea
                name=""
                id="testing"
                className="form-control textarea  "
                placeholder="Type your message..."
              ></textarea>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-start mx-auto checkbox-div">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I accept the terms</label>
          </div>

          <button className="d-block mx-auto" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
