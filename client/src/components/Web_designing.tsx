import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink, Image, Button, Card, CardBody, Form, FormGroup, Collapse, NavbarToggle,FormControl, NavbarBrand, Accordion } from "react-bootstrap";
import pjop from "../assets/images/logos/logo-1.png";
import certification from "../assets/images/landingpage/certification.jpg";
import online from "../assets/images/landingpage/online.jpg";
import fulltime from "../assets/images/landingpage/fulltime.jpg";
import access from "../assets/images/landingpage/access.jpg";
import support from "../assets/images/landingpage/support.jpg";
import refund from "../assets/images/landingpage/refund.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { FormControl } from 'react-bootstrap';

interface WebDesigningProps {}

const WebDesigning: React.FC<WebDesigningProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header1 po-relative">
      <Container>
        <Navbar className="navbar-expand-lg h1-nav">
          <NavbarBrand href="#">
            <Image src={pjop} alt="pjop" className="custom-pjop" />
          </NavbarBrand>
          <NavbarToggle onClick={toggle}>
            <span className="ti-menu"></span>
          </NavbarToggle>
          <Navbar id="header1">
  
  <Collapse in={isOpen}>
            <Nav navbar className="ms-auto mt-2 mt-lg-0">
              <NavItem className="active">
                <NavLink href="#" style={{ color: "green" }}>
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
                <NavLink href="#" style={{ color: "green" }}>
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
                  <b>Contact</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={() => {
                    window.location.href = "tel:+1234567890";
                  }}
                >
                  <i className="fa fa-phone" /> <b>Call us</b>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
        </Navbar>
      </Container>
      <br />
      <br />
      <br />
      <div className="bg-image">
        <div className="title-holder">
          <Container>
            <Row>
              <Col>
                <h1 className="Abt">
                  <b>Web Designing</b>
                </h1>
                <h1 className="Abt1">
                  <b>Accelerate your Career</b>
                </h1>
                <p className="para">
                  <br />
                  <b>
                    Learn how to build highly scalable software applications
                    using web designing <br /> and master all of its core
                    concepts with this comprehensive <br />
                    begineer-to-expert web designing online course by PJOP
                    Computers and <br /> gain a globally recognized job-ready
                    certificate upon successful completion.
                  </b>
                </p>
                <h3 className="Abt1 display-flex">
                  <b>Buy this course @</b>
                </h3>
                <div className="d-flex">
                  <h3 className="Abt2">
                    <b>₹1800</b>
                  </h3>

                  <h3 className="Abt3 ps-2">
                    <b>₹1499</b>
                  </h3>
                  <p className="badge badge-warning ms-2 mt-1 ps-1">
                    <b>You Save ₹</b>
                    <span className="saved-amount">
                      <b>201</b>
                    </span>
                    !
                  </p>
                </div>
              </Col>
              <Col lg="4" md="6" className="text-center">
                <div className="cards">
                  <Card className="card-shadow shadow position-fixed me-5">
                    <CardBody>
                      <h4 className="font-weight-bold text-decoration">
                        <b>GET THIS COURSE @₹1499</b>
                      </h4>
                      <Form>
                        <Row>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <FormControl type="text" placeholder="Name" />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <FormControl type="email" placeholder="Email ID" />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <FormControl type="number" placeholder="Phone Number" />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <Button
                              type="button"
                              className="btn btn-success-gradiant m-t-10 btn-arrow"
                            >
                              <span>
                                {" "}
                                Enroll Now <i className="ti-arrow-right"></i>
                              </span>
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <br />

      <div className="title-holder">
        <Container>
          <Row>
            <Col>
              <h1 className="Abt4">
                <b>Web Designing Course Overview</b>
              </h1>
              <p className="para1">
                <br />
                <b>
                  Web designing is the process of planning, conceptualizing, and
                  implementing<br /> the plan for designing a website in a way that is
                  functional and offers a good<br /> user experience. User experience
                  is central to the web designing process.<br /> Websites have an
                  array of elements presented in ways that make them easy<br /> to
                  navigate. Web designing essentially involves working on every
                  attribute of<br /> the website that people interact with, so that
                  the website is simple and<br /> efficient, allows users to quickly
                  find the information they need, and looks<br /> visually pleasing.
                  All these factors, when combined, decide how well the<br /> website
                  is designed.
                </b>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div className="title-holder">
        <Container>
          <Row>
            <Col>
              <h1 className="Abt5">
                <b>Key Features</b>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="">
                <Image src={certification} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>
                  Globally Recognised Certification
                </b>
              </div>
              <div className="container1">
                <p className="cp"></p>
              </div>
            </Col>
            <Col>
              <div className="">
                <Image src={online} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>
                  100% Online and Self-paced learning
                </b>
              </div>
              <div className="container2">
                <p className="cp"></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="">
                <Image src={fulltime} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>
                  Full lifetime access to all content
                </b>
              </div>
              <div className="container3">
                <p className="cp"></p>
              </div>
            </Col>
            <Col>
              <div className="">
                <Image src={access} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>
                  Access to 4 Gamified Practise Platforms
                </b>
              </div>
              <div className="container4">
                <p className="cp"></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="">
                <Image src={support} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>
                  Dedicated Forum Support to clear all your doubts
                </b>
              </div>
              <div className="container3">
                <p className="cp"></p>
              </div>
            </Col>
            <Col>
              <div className="">
                <Image src={refund} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>7 Days refundpolicy</b>
              </div>
              <div className="container4">
                <p className="cp"></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />

      <div className="title-holder">
        <Container>
          <Row>
            <Col>
              <h1 className="Abt6">
                <b>Web Designing Course Topics You will Learn</b>
              </h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={8}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Begineer Module
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Intermediate Module
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the second item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Advanced Module
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the third item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Expert Module
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the third item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <div className="footer4 b-t spacer" style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Address</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                71 Amsteroum Avenue Cronish Night, NY 35098
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Phone</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Reception : +205 123 4567 <br />
                Office : +207 235 7890
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Email</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Office :{" "}
                <a href="#" className="link" style={{ color: "white" }}>

                info@wrappixel.com




                </a>{' '}
                <br />
                Site :{' '}
                <a href="#" className="link" style={{ color: 'white' }}>
                  wrapkit@wrappixel.com
                </a>
              </p>
            </Col>
            <Col lg="3"md="6">
              <h5 className="m-b-20" style={{ color: '#20c997' }}>
                <b>Social</b>
              </h5>
              <div className="round-social light">
                <a href="#" className="link">
                  <i className="fa fa-facebook" style={{ color: 'blue' }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-twitter" style={{ color: '#1DA1F2' }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-google-plus" style={{ color: 'darkred' }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-youtube-play" style={{ color: 'red' }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-instagram" style={{ color: '#C13584' }}></i>
                </a>
              </div>
            </Col>
          </Row>
          <div className="f4-bottom-bar">
            <Row>
              <Col md="12">
                <div className="d-flex font-14 justify-content-between">
                  <div className="m-t-10 m-b-10 copyright" style={{ color: 'white' }}>
                    All Rights Reserved by pjoptechnologies.
                  </div>
                  <div className="links ms-auto m-t-10 m-b-10">
                    <a href="#" className="p-10 p-l-0" style={{ color: 'white' }}>
                      Terms of Use
                    </a>
                    <a href="#" className="p-10" style={{ color: 'white' }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: 'white' }}>
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WebDesigning