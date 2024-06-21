import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(): JSX.Element {
  return (
    <>
      <div className="static-slider-head banner2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-6 align-self-center text-center">
              <h1 className="title" style={{ fontSize: "6vw" }}>
                PJOP Computers
              </h1>
              <h4 className="subtitle font-light">
                Upskill and Transform Your Career!
              </h4>
              <a
                href="/"
                className="btn btn-light m-r-20 btn-md m-t-30 font-14"
              >
                {" "}
                <b>Get Started</b>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="card card-shadow">
                <div className="card-body">
                  <h4 className="font-weight-bold text-decoration">
                    <b>GET THIS COURSE</b>
                  </h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group m-t-15">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group m-t-15">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group m-t-15">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group m-t-15">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <p>
                          By submitting, you agree to the{" "}
                          <span className="text-primary">
                            <Link to={"/custom-components"}>
                              Privacy Policy
                            </Link>{" "}
                          </span>
                          and to receive communications about this and other
                          courses.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="button"
                          className="btn btn-success-gradiant m-t-10 btn-arrow"
                        >
                          <span>
                            {" "}
                            Enroll Now <i className="ti-arrow-right"></i>
                          </span>
                        </button>
                      </div>

                      <div className="col-lg-12">
                        <hr />
                      </div>
                      <div className="col-lg-6">
                        <button type="button" className="btn btn-primary w-100">
                          <i className="fa fa-phone" /> Contact
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button type="button" className="btn btn-success w-100">
                          <i className="fa fa-whatsapp" /> whatsapp
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

      {/* <Carousel>
        <Carousel.Item>
          <Image
            src={require("../assets/images/landingpage/slide1.jpg")}
          ></Image>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            src={require("../assets/images/landingpage/slide2.jpg")}
          ></Image>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            src={require("../assets/images/landingpage/slide3.jpg")}
          ></Image>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    
  


