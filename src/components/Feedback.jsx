import React from "react";
import "../styles/feedback.css";
import fivestars from "../assets/images/stars.png";
import dianne from "../assets/images/dianne.png";
import kristin from "../assets/images/watson.png";
import kathryn from "../assets/images/murphy.png";
const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      img: fivestars,
      paragraph:
        "Services surpasses his competitors in service quality. His works are of high quality, delivered promptly. I higly recommend his services.",
      image: dianne,
      name: "Dianne Russell",
      title: "Starbucks",
    },

    {
      id: 2,
      img: fivestars,
      paragraph:
        "Services surpasses his competitors in service quality. His works are of high quality, delivered promptly. I higly recommend his services.",
      image: kristin,
      name: "Kristin Watson",
      title: "Louis Vuitton",
    },

    {
      id: 3,
      img: fivestars,
      paragraph:
        "Services surpasses his competitors in service quality. His works are of high quality, delivered promptly. I higly recommend his services.",
      image: kathryn,
      name: "Kathryn Murphy",
      title: "McDonald's",
    },
  ];
  return (
    <div className="feedback-main-con">
      <div className="container feedback-inner-con">
        <h3>Clients Feedback</h3>
        <h1>Customer testimonials</h1>

        <div className="third-div">
          {testimonials.map((testimonial) => {
            return (
              <div className="contents-con" key={testimonial.id}>
                <div className="feedback-contents">
                  <img className="img-fluid" src={testimonial.img} alt="" />
                  <p>{testimonial.paragraph}</p>

                  <div className="d-flex gap-4 align-items-center justify-content-start name-title ">
                    <img src={testimonial.image} alt="" />
                    <div className="d-flex hmm">
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
