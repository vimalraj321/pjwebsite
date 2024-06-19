import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
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
  Input,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  UncontrolledAccordion,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Training: React.FC = () => {
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
                src={require("../assets/images/logos/pjop.png")}
                className="custom-logo"
              />
            </NavbarBrand>

            <NavbarToggler>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse navbar id="header1">
              <Nav navbar className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/" style={{ color: "green" }}>
                    <Link to="/">
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
                    <Link to="/contact">
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
        </Container>

        {/*Special Training */}

        <div className="title-holder courses" style={{ padding: "100px 0" }}>
          <h1 className="text-center">
            <b>Our Special Training</b>
            <hr
              style={{
                borderTop: "5px solid green",
                width: "8%",
                margin: "auto",
              }}
            />
          </h1>
          <br />
          <h2 className="text-center tsp">
            <b>
              We package the Courses with best Training to make you a happy
              Student
            </b>
          </h2>
        </div>
        <br />

        <Container>
          <Row>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/msoffice1.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>MS OFFICE TRAINING</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.3000</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/photoshop.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>PHOTOSHOP</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.2000</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/coreldraw.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>CORELDRAW</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.1500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/tallyprime.png")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>TALLY PRIME</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.4000</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/maths.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>MATHEMATICS</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/english.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>SPOKEN ENGLISH</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/hindi (1).jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>SPOKEN HINDI</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/cbse tuition.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>CBSE</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <Link to="/dca">
                    <Image
                      src={require("../assets/images/portfolio/tnscert.jpg")}
                      className="msoffice"
                      alt="ms"
                    />
                  </Link>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>TNSCERT</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/*Accordion */}
        <UncontrolledAccordion defaultOpen="0">
          <AccordionItem>
            <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item's accordion body.</strong> You can
              modify any of this with custom CSS or overriding our default
              variables. It’s also worth noting that just about any HTML can go
              within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item's accordion body.</strong> You can
              modify any of this with custom CSS or overriding our default
              variables. It’s also worth noting that just about any HTML can go
              within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item's accordion body.</strong> You can
              modify any of this with custom CSS or overriding our default
              variables. It’s also worth noting that just about any HTML can go
              within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>

        {/* footer */}
        <div className="footer1" style={{ padding: "30px 0 10px" }}>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="m-t-15">
                  <h4 className="font-medium">Phone</h4>
                  <p>123 456 7890</p>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="m-t-15">
                  <h4 className="font-medium">E-Mail</h4>
                  <p>support@wrappixel.com</p>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="m-t-15">
                  <h4 className="font-medium">Social</h4>
                  <div className="d-flex no-block align-items-center">
                    <a href="https://www.facebook.com">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.instagram.com">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/home">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="m-t-15">
                  <h4 className="font-medium">Address</h4>
                  <p>No.4/A Velrampet Main Road Velrampet,Puducherry</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Training;
