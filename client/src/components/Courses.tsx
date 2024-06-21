import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  Form,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Row,
} from 'react-bootstrap';
import logo from '../assets/images/logos/logo-1.png';
import c1 from '../assets/images/portfolio/c1.jpg';
import c2 from '../assets/images/portfolio/c2.jpg';
import c33 from '../assets/images/portfolio/c33.jpg';
import c44 from '../assets/images/portfolio/c44.jpg';
import c55 from '../assets/images/portfolio/c55.jpg';
import c67 from '../assets/images/portfolio/c67.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Courses() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header-bar-one">
        <Container>
          <p style={{ color: 'white' }}>
            <b>No.4/A Velrampet Main Road Velrampet,Puducherry</b>
          </p>
        </Container>
        <div
          className="header-bar-two float-end clearfix"
          style={{ display: 'flex', justifyContent: 'center' }}
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
              <img src={logo} className="custom-logo" alt="logo" />
            </NavbarBrand>

            <NavbarToggle onClick={() => setIsOpen(!isOpen)}>
              <span className="ti-menu"></span>
            </NavbarToggle>
            <Navbar id="header1">
            <Collapse in={isOpen}>
              <Nav navbar className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/" style={{ color: 'green' }}>
                    <Link to={'/'}>
                      <b style={{ color: 'green' }}>Home</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: 'green' }}>
                    <b>About</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: 'green' }}>
                    <b>Courses</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: 'green' }}>
                    <b>Training</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: 'green' }}>
                    <b>Videos</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: 'green' }}>
                    <Link to={'/contact'}>
                      <b style={{ color: 'green' }}>Contact</b>
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

        <div
          className="title-holder courses"
          style={{ padding: '100px 0' }}
        >
          <h1 className="text-center">
            <b>Our Courses</b>
            <hr
              style={{
                borderTop: '5px solid green',
                width: '8%',
                margin: 'auto',
              }}
            />
          </h1>
          <br />
          <h2 className="text-center tsp">
            <b>Easy and effective Training and Learning</b>
          </h2>
        </div>
        <Container>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a className="img-ho">
                    <Link to={'/dca'}>
                      <img
                        className="card-img-top1"
                        src={c1}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>DCA PGDCA HDCA</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>MS OFFICE(Word,Excel,PowerPoint), C,Photoshop,Coreldraw,Tally</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={'/desktop'}>
                      <img
                        className="card-img-top2"
                        src={c2}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Desktop publishing</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>PhotoShop,CorelDraw,Indesign, Illustrator, PageMaker projects</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={'/Software_development'}>
                      <img
                        className="card-img-top3"
                        src={c33}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Software Devlopment</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>C,C++,JAVA,DOTNET,SQLSERVER, PROJECTS FRONT END AND BACK END</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={'/Web_designing'}>
                      <img
                        className="card-img-top4"
                        src={c44}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Web Designing</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>HTML5,CSS3,JAVASCRIPT, BOOTSTRAP, ANGULAR JS, JQUERY</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={'/Advanced_python'}>
                      <img
                        className="card-img-top5"
                        src={c55}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Advanced Python</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>Python,Django,Data Science, MachineLearning,Flask, MongoDB</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={'/Hardware_networking'}>
                      <img
                        className="card-img-top6"
                        src={c67}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Hardware Networking</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>Computer,LapTop Service and Networking Practical Training</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <div
          className="footer4 b-t spacer"
          style={{ backgroundColor: 'black' }}
        >
          <Container>
            <Row>
              <Col lg="3" md="6" className="m-b-30">
                <h5 className="m-b-20" style={{ color: '#20c997' }}>
                  <b>Address</b>
                </h5>
                <p className="context" style={{ color: 'white' }}>
                  No:1 Velrampet Main Road, Velrampet, Puducherry-605 004.
                </p>
              </Col>
              <Col lg="3" md="6" className="m-b-30">
                <h5 className="m-b-20" style={{ color: '#20c997' }}>
                  <b>Phone</b>
                </h5>
                <p className="context" style={{ color: 'white' }}>
                  Mobile: +91 9942364752
                </p>
              </Col>
              <Col lg="3" md="6" className="m-b-30">
                <h5 className="m-b-20" style={{ color: '#20c997' }}>
                  <b>Email</b>
                </h5>
                <p className="context" style={{ color: 'white' }}>
                  Office :{' '}
                  <a
                    href="#"
                    className="link"
                    style={{ color: 'white' }}
                  >
                    info@pjoptechnologies.com
                  </a>{' '}
                  <br />
                </p>
              </Col>
              <Col lg="3" md="6">
                <h5 className="m-b-20" style={{ color: '#20c997' }}>
                  <b>Social</b>
                </h5>
                <div className="round-social light">
                  <a href="#" className="link">
                    <i
                      className="fa fa-facebook"
                      style={{ color: 'blue' }}
                    ></i>
                  </a>
                  <a href="#" className="link">
                    <i
                      className="fa fa-twitter"
                      style={{ color: '#1DA1F2' }}
                    ></i>
                  </a>
                  <a href="#" className="link">
                    <i
                      className="fa fa-google-plus"
                      style={{ color: 'darkred' }}
                    ></i>
                  </a>
                  <a href="#" className="link">
                    <i
                      className="fa fa-youtube-play"
                      style={{ color: 'red' }}
                    ></i>
                  </a>
                  <a href="#" className="link">
                    <i
                      className="fa fa-instagram"
                      style={{ color: '#C13584' }}
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
                      style={{ color: 'white' }}
                    >
                      Copyrights © 2024 pjop technologies. All Rights
                      Reserved.
                    </div>
                    <div className="links ms-auto m-t-10 m-b-10">
                      <a
                        href="#"
                        className="p-10 p-l-0"
                        style={{ color: 'white' }}
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
      </div>
    </>
  );
}
