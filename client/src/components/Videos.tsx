import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import NavbarToggler from "react-bootstrap/NavbarToggle";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
//import Input from "react-bootstrap/Input";
import Button from "react-bootstrap/Button";
import { NavbarBrand } from "react-bootstrap";
import logo from "../assets/images/logos/pjop.png";

const Videos: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="header-bar-one">
        <Container>
          <p style={{ color: "white" }}>
            <b>No.4/A Velrampet Main Road Velrampet,Puducherry</b>
          </p>
        </Container>
        <div
          className="header-bar-two float-end clearfix"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ul>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/home">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </ul>
        </div>
      </div>

      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/">
              <Image
                src={logo}
                className="custom-logo"
              ></Image>
            </NavbarBrand>

            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Navbar id="header1">
            <Collapse in={isOpen} >
              <Nav navbar className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/" style={{ color: "green" }}>
                    <Link to={"/"}>
                      <b style={{ color: "green" }}>Home</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: "green" }}>
                    <b>About</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: "green" }}>
                    <b>Courses</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: "green" }}>
                    <b>Training</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: "green" }}>
                    <b>Videos</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: "green" }}>
                    <Link to={"/contact"}>
                      <b style={{ color: "green" }}>Contact</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button type="button" className="btn btn-success w-100">
                    <i className="fa fa-phone" /> <b>Call us</b>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
            </Navbar>
          </Navbar>
        </Container>

        <div className="title-holder courses" style={{ padding: "100px 0" }}>
          <h1 className="text-center">
            <b>Videos</b>
           <hr
              style={{
                borderTop: "5px solid green",
                width: "10%",
                margin: "auto",
              }}
            />
          </h1>
          <br />
          <h2 className="text-center tsp">
            <b>We package the videos to make you a happy student</b>
          </h2>
        </div>
        <br />
        <br />
        <h1 className="text-center">
          <b>12th Ncert Maths</b>
          <hr
            style={{
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <br />
        <div className="iframe-div">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/17hpUDujJ_0?si=cxIZnbNukFGBFsyR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="spacer"></div>
        <h1 className="text-center">
          <b>French Class</b>
          <hr
            style={{
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <br />
        <div className="iframe-div">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5nSQS4_1ioc?si=e5277I67Cd9bS3cg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="spacer"></div>
        <h1 className="text-center">
          <b>Photoshop Class</b>
          <hr
            style={{
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <br />
        <div className="iframe-div">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vo4OG7ZUCMs?si=jN255aa-84j44vZv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="footer4 b-t spacer" style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Address</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                No:1 Velrampet Main Road, Velrampet, Puducherry-605 004.
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Phone</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Mobile: +91 9942364752
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Email</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Office :{" "}
                <a href="#" className="link" style={{ color: "white" }}>
                  info@pjoptechnologies.com
                </a>{" "}
                <br />
              </p>
            </Col>
            <Col lg="3" md="6">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Social</b>
              </h5>
              <div className="round-social light">
                <a href="#" className="link">
                  <i className="fa fa-facebook" style={{ color: "blue" }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-twitter" style={{ color: "#1DA1F2" }}></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-google-plus"
                    style={{ color: "darkred" }}
                  ></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-youtube-play"
                    style={{ color: "red" }}
                  ></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-instagram"
                    style={{ color: "#C13584" }}
                  ></i>
                </a>
              </div>
            </Col>
          </Row>
          <div className="f4-bottom-bar">
            <Row>
              <Col md="12">
                <div className="d-flex font-14 justify-content-between">
                  <div
                    className="m-t-10 m-b-10 copyright"
                    style={{ color: "white" }}
                  >
                    Copyrights © 2024 pjop technologies. All Rights Reserved.
                  </div>
                  <div className="links ms-auto m-t-10 m-b-10">
                    <a
                      href="#"
                      className="p-10 p-l-0"
                      style={{ color: "white" }}
                    >
                      Developed by Legends Tech Solution
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Videos;