import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Row,
  Col,
} from "react-bootstrap";
import pjop from "../assets/images/logos/logo-1.png";
import certification from "../assets/images/landingpage/certification.jpg";
import online from "../assets/images/landingpage/online.jpg";
import fulltime from "../assets/images/landingpage/fulltime.jpg";
import access from "../assets/images/landingpage/access.jpg";
import support from "../assets/images/landingpage/support.jpg";
import refund from "../assets/images/landingpage/refund.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const SoftwareDevelopment: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header1 po-relative">
      <Container>
        <Navbar className="navbar-expand-lg h1-nav">
          <NavbarBrand href="#">
            <img src={pjop} alt="pjop" className="custom-pjop" />
          </NavbarBrand>
          <NavbarToggle onClick={toggle}>
            <span className="ti-menu"></span>
          </NavbarToggle>
          <Accordion.Collapse eventKey="0" id="header1" in={isOpen}>
            <Nav className="ms-auto mt-2 mt-lg-0">
              <Nav.Item className="active">
                <Nav.Link href="#" style={{ color: "green" }}>
                  <Link to="/">
                    <b style={{ color: "green" }}>Home</b>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" style={{ color: "green" }}>
                  <b>About</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" style={{ color: "green" }}>
                  <b>Courses</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/" style={{ color: "green" }}>
                  <b>Training</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/" style={{ color: "green" }}>
                  <b>Videos</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" style={{ color: "green" }}>
                  <b>Contact</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={() => {
                    window.location.href = "tel:+1234567890";
                  }}
                >
                  <i className="fa fa-phone" /> <b>Call us</b>
                </Button>
              </Nav.Item>
            </Nav>
          </Accordion.Collapse>
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
                  <b>Software Development</b>
                </h1>
                <h1 className="Abt1">
                  <b>Accelerate your Career</b>
                </h1>
                <p className="para">
                  <br />
                  <b>
                    Learn how to build highly scalable software applications
                    using software development <br /> and master all of its core
                    concepts with this comprehensive <br />
                    begineer-to-expert software development online course by
                    PJOP Computers and <br /> gain a globally recognized
                    job-ready certificate upon successful completion.
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
                  <Card className="card-shadow shadowposition-fixed me-5">
                    <Card.Body>
                      <h4 className="font-weight-bold text-decoration">
                        <b>GET THIS COURSE @₹1499</b>
                      </h4>
                      <Form>
                        <Row>
                          <Col lg="12">
                            <Form.Group className="m-t-15">
                              <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                          </Col>
                          <Col lg="12">
                            <Form.Group className="m-t-15">
                              <Form.Control type="email" placeholder="Email ID" />
                            </Form.Group>
                          </Col>
                          <Col lg="12">
                            <Form.Group className="m-t-15">
                              <Form.Control type="number" placeholder="Phone Number" />
                            </Form.Group>
                          </Col>
                          <Col lg="12">
                            <Button
                              type="button"
                              className="btn btn-success-gradiant m-t-10 btn-arrow"
                            >
                              <span>
                                Enroll Now <i className="ti-arrow-right"></i>
                              </span>
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
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
                <b>Software Development Course Overview</b>
              </h1>
              <p className="para1">
                <br />
                <b>
                  Software development is the process used to conceive, specify,
                  design, program,<br /> document, test, and bug fix in order to
                  create and maintain applications,<br /> frameworks, or other
                  software components. Software development involves<br /> writing and
                  maintaining the source code, but in a broader sense, it
                  includes<br /> all processes from the conception of the desired
                  software through the final<br /> manifestation, typically in a
                  planned and structured process often overlapping<br /> with software
                  engineering. Software development also includes research,<br /> new
                  development, prototyping, modification, reuse, re-engineering,<br />
                  maintenance, or any other activities that result in software
                  products.
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
                <img src={certification} className="certification mb-4" />{" "}
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
                <img src={online} className="certification mb-4" />{" "}
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
                <img src={fulltime} className="certification mb-4" />{" "}
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
                <img src={access} className="certification mb-4" />{" "}
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
                <img src={support} className="certification mb-4" />{" "}
                <b style={{ color: "black" }}>24/7 Support & assistance</b>
              </div>
              <div className="container5">
                <p className="cp"></p>
              </div>
            </Col>
            <Col>
              <div className="">
                <img src={refund} className="certification mb-4" />{""}
                <b style={{ color: "black" }}>7 days refund policy</b>
              </div>
              <div className="container6">
                <p className="cp"></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />

      <div className="title-holder">
        <Container>
          <Row>
            <Col>
              <h1 className="Abt6">
                <b>Frequently Asked Questions</b>
              </h1>
              <p className="para2">
                <b>Here are some frequently asked questions:</b>
              </p>
            </Col>
          </Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>How do I enroll for the Software Development course?</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  To enroll in our Software Development course, you need to first
                  visit the PJOP Computers website. Next, browse through our
                  wide range of courses and select the Software Development
                  course. Click on the 'Enroll Now' button, and you will be
                  directed to the payment page. After completing the payment
                  process, you will receive a confirmation email with your login
                  details. Use these details to access your course materials and
                  start learning immediately.
                </b>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b>Can I access the course materials anytime?</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  Yes, once you enroll in our Software Development course, you
                  will have full access to all course materials. The course is
                  designed to be self-paced, allowing you to learn at your own
                  convenience. You can access the materials anytime, anywhere,
                  and revisit them as many times as you need.
                </b>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b>Do I need any prior knowledge to enroll?</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  No prior knowledge or experience is required to enroll in our
                  Software Development course. The course is designed for
                  beginners and covers all the fundamental concepts of software
                  development. However, a basic understanding of computers and
                  internet usage is recommended to make the learning process
                  smoother.
                </b>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <b>What if I have questions during the course?</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  Our dedicated support team is available 24/7 to assist you
                  with any queries or concerns you may have during the course.
                  You can reach out to us via email, phone, or live chat, and we
                  will be happy to help you.
                </b>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <b>Is there a refund policy?</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  Yes, we offer a 7-day refund policy for our Software
                  Development course. If you are not satisfied with the course
                  within the first 7 days of enrollment, you can request a full
                  refund. Please refer to our refund policy page for more
                  details.
                </b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <br />
      <br />

      <div className="title-holder">
        <Container>
          <Row>
            <Col>
              <h1 className="Abt7">
                <b>Student Testimonials</b>
              </h1>
              <p className="para3">
                <b>
                  Hear what our students have to say about the Software
                  Development course:
                </b>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;