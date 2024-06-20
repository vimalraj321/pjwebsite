import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import contact from "../../../public/assets/images/contact/contact.jpg";
const ContactUs = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={contactRef} className="contact-us">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="6" className="text-center">
            <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
              Contact Us
            </h1>
            <Form>{/* form fields */}</Form>
          </Col>
          <Col lg="6" md="6" className="text-center">
            <img src={contact} alt="Contact Us" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
