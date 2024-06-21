import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import contact from "../../../public/assets/images/contact/contact.jpg";

const ContactUs = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={contactRef} className="contact-us mt-10">
      <Container>
        <h5 className="m-b-20 text-center h1" style={{ color: "#20c997" }}>
          <b>Contact Us</b>
        </h5>
        <hr
          style={{
            borderTop: "5px solid green",
            width: "10%",
            margin: "auto",
          }}
        />
        <Row className="justify-content-center">
          <Col lg="6" md="6" xs="12" className="text-center">
            <Form>
              <Row>
                <Col xs="12" lg="6">
                  <FormGroup className="mt-3">
                    <FormControl type="text" placeholder="Name" />
                  </FormGroup>
                </Col>
                <Col xs="12" lg="6">
                  <FormGroup className="mt-3">
                    <FormControl type="email" placeholder="Email" />
                  </FormGroup>
                </Col>
                <Col xs="12" lg="12">
                  <FormGroup className="mt-3">
                    <FormControl type="tel" placeholder="Phone Number" />
                  </FormGroup>
                </Col>
                <Col xs="12" lg="12">
                  <FormGroup className="mt-3">
                    <FormControl as="textarea" placeholder="Message" />
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <Button
                    type="submit"
                    className="btn btn-success-gradiant mt-3"
                  >
                    <span> SUBMIT </span>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg="6" md="6" xs="12" className="text-center">
            <img src={contact} className="object-fit" alt="Contact Us" />
          </Col>
        </Row>
        <Row
          className="justify-content-center"
          style={{ fontSize: "1rem", marginTop: "10px" }}
        >
          <Col lg="12" md="12" className="text-center">
            <div className="mini-spacer bg-success gradient text-white c2a7">
              <Container>
                <div className="d-flex justify-content-between">
                  <div className="display-7 align-self-center text-dark">
                    <b>Request a Free Quote</b>
                  </div>
                  <div className="ms-auto my-3 my-lg-0">
                    <Button className="btn btn-dark btn-md">GET QUOTE</Button>
                  </div>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
