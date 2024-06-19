import { useState } from "react";
import certification from "../assets/images/landingpage/certification.jpg";
import online from "../assets/images/landingpage/online.jpg";
import fulltime from "../assets/images/landingpage/fulltime.jpg";
import access from "../assets/images/landingpage/access.jpg";
import support from "../assets/images/landingpage/support.jpg";
import refund from "../assets/images/landingpage/refund.jpg";
import { Button, Card, CardBody, Col, Container, FormGroup, Image, Row } from "react-bootstrap";

import { courseData  }  from "../data/course";
import { useParams } from "react-router-dom";
export default function Advanced_python() {
  const [isOpen, setIsOpen] = useState(false);

  const {name}  = useParams()
  const toggle = () => setIsOpen(!isOpen);
if(!name ) return <>No values</>
  if(!courseData[name]) return <>No values</>

  return (
    <div className="header1 po-relative">
      <div className="bg-image">
        <div className="title-holder">
          <Container>
            <Row>
              <Col>
                <h1 className="Abt">
                  <b>{courseData[name].title}</b>

                </h1>
                <h1 className="Abt1">
                  <b>{courseData[name].subTitle}</b>
                </h1>
                <p className="para">
                  <br />
                  <b>{courseData[name].description}</b>
                </p>
                <h3 className="Abt1 display-flex">
                  <b>Buy this course @</b>
                </h3>
                <div className="d-flex">
                  <h3 className="Abt2">
                  <b>{courseData[name].price}</b>
                  </h3>

                  <h3 className="Abt3 ps-2">
                  <b>{courseData[name].offerPrice}</b>
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
                <b>Advanced Python</b>
              </h1>
              <p className="para1">
                <br />
                <b>
                  Python is one of the most widely used programming languages,
                  and knowing<br /> how to use it is a highly sought-after skill if
                  you want a career as a data<br /> professional. In this course, you
                  will learn the fundamentals of programming<br /> with Python - no
                  previous coding experience is necessary. By the end of the<br />
                  course, you will be able to write basic Python programs. This
                  interactive<br /> Python course for beginners develops fundamental
                  data science skills to<br /> help you begin your journey to become a
                  successful data professional.In this<br /> course, you'll learn to
                  do basic arithmetic; write code using Python syntax;<br /> work with
                  different types of data; and perform basic Python operations<br />
                  such as working with variables, processing numerical and text
                  data,and<br /> manipulating lists.
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
            <Col md={8}>
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
            <Col md={8}>
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
                <b style={{ color: "black" }}>
                  Dedicated Forum Support
                </b>
              </div>
              <div className="container3">
                <p className="cp"></p>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <img src={refund} className="certification mb-4" />{" "}
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
                  <i className="fa fa-facebook" style={{color: 'blue'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-twitter" style={{color: '#1DA1F2'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-google-plus" style={{color: 'darkred'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-youtube-play" style={{color: 'red'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-instagram" style={{color: '#C13584'}}></i>
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


 