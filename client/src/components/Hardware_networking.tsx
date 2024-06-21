import React, { useState } from "react";
 
import { Link } from "react-router-dom";
import { Image,   Accordion,
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
  NavbarToggle,
  FormControl
 } from "react-bootstrap";
  


export default function Hardware_networking() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header1 po-relative">
      <Container>
        <Navbar className="navbar-expand-lg h1-nav">
          <NavbarBrand href="#">
            <h1>
pjop            </h1>
          </NavbarBrand>
          <NavbarToggle onClick={toggle}>
            <span className="ti-menu"></span>
          </NavbarToggle>
          <Collapse >
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
                  <b>Hardware Networking</b>
                </h1>
                <h1 className="Abt1">
                  <b>Accelerate your Career</b>
                </h1>
                <p className="para">
                  <br />
                  <b>
                    Learn how to build highly scalable software applications
                    using DCA <br /> and master all of its core concepts with
                    this comprehensive <br />
                    begineer-to-expert Hardware networking online course by PJOP
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
                              <FormControl
                                type="number"
                                placeholder="Phone Number"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <Button
                              type="button"
                              className="btn btn-success-gradiant m-t-10 btn-arrow"
                            >
                              <span>
                                {" "}
                                Enroll Now{" "}
                                <i className="ti-arrow-right"></i>
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
                <b>Hardware Networking Course Overview</b>
              </h1>
              <p className="para1">
                <br />
                <b>
                  Planning on getting into Hardware and Networking courses? This
                  article finds out<br /> what a professional Hardware and Networking
                  engineer is like and what it takes to<br /> get into this
                  profession. Read the article below to find out more the
                  information on<br /> how you can craft your career success in this
                  field. Hardware and Networking Course<br /> is a demanding career in
                  the field of Information Technology due to its rise and needs<br />
                  in today's world. It is one of the high-paying skills and
                  fastest-growing domains in the<br /> IT Sector.There is a huge scope
                  in the future for this career. In this career path<br /> knowledge
                  of Technical and analytical skills are required along with
                  these having the<br /> knowledge of software installation would be
                  required for hardware networking professional.
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
                {/* <img src={certification} className="certification mb-4" />{" "} */}
                <b style={{ color: "black" }}>
                  Globally Recognised Certification
                </b>
              </div>
              <div className="container1">
                <p className="cp"></p>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                {/* <img src={online} className="certification mb-4" />{" "} */}
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
                {/* <img src={fulltime} className="certification mb-4" />{" "} */}
                <b style={{ color: "black" }}>
                  Full lifetime access to all content
                </b>
              </div>
              <div className="container3">
                <p className="cp"></p>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                {/* <img src={access} className="certification mb-4" />{" "} */}
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
                {/* <img src={support} className="certification mb-4" />{" "} */}
                <b style={{ color: "black" }}>Dedicated Forum Support</b>
              </div>
              <div className="container3">
                <p className="cp"></p>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                {/* <img src={refund} className="certification mb-4" />{" "} */}
                <b style={{ color: "black" }}>7 Days refund policy</b>
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
                <b>Hardware Networking Course Topics You will Learn</b>
              </h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={8}>
              <Accordion defaultActiveKey="0">
                <Card>
                  
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul>
                        <li>Characteristics of Computer</li>
                        <li>Computer System</li>
                        <li>Central Processing Unit</li>
                        <li>Secondary Storage Devices</li>
                        <li>File System Input Devices</li>
                        <li>Multimedia and Applications</li>
                        <li>Computer Software and Hardware</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
             
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <strong>
                        This is the second item's accordion body.
                      </strong>
                      You can modify any of this with custom CSS or overriding
                      our default variables. It's also worth noting that just
                      about any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />

      <div
        className="footer4 b-t spacer"
        style={{ backgroundColor: "black" }}
      >
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
                </a>{" "}
                <br />
                Site :{" "}
                <a href="#" className="link" style={{ color: "white" }}>
                  wrapkit@wrappixel.com
                </a>
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
                  <i className="fa fa-youtube-play" style={{ color: "red" }}></i>
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
                    All Rights Reserved by pjoptechnologies.
                  </div>
                  <div className="links ms-auto m-t-10 m-b-10">
                    <a
                      href="#"
                      className="p-10 p-l-0"
                      style={{ color: "white" }}
                    >
                      Terms of Use
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
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
}


