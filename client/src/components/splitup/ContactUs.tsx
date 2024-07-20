/*import React, { useRef } from "react";
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
*/
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './ContactPage.css';
import contactImage from '../../../public/assets/images/article-lisa-01-1200x800.png';

interface ContactPageProps {}

const ContactUs: React.FC<ContactPageProps> = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="title mb-4" style={{ fontSize: "3vw", color: "#0dba4b" }}>
              Contact Us
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
              We would love to hear from you! Please fill out this form and we will get in touch with you shortly.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className="text-start">
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={5} md={5} className="text-center">
            <img src={contactImage} alt="Contact Us" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
