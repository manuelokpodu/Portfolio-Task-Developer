import React from "react";
import logoImage from "../assets/images/logo.png";
import "../styles/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div className="position-sticky bg-white top-0">
      <Navbar expand="lg" className="fs-4 ">
        <Container className="py-3">
          <Navbar.Brand>
            <div>
              <img src={logoImage} alt="logoImage" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto  gap-3 optionss">
              <a href="#hero " className="home">
                Home
              </a>

              <a href="#portfolio " className="por">
                Portfolio
              </a>
              <a href="#about" className="me">
                About me
              </a>
              <a href="#testimonials" className="test">
                Testimonials
              </a>
            </Nav>

            <Nav className="ms-auto  gap-4">
              <button className="butt">Contact Me</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
