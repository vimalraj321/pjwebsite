import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <h5>Address</h5>
            <p>No:1 Velrampet Main Road, Velrampet, Puducherry-605 004.</p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Phone</h5>
            <p> +91 9942364752</p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Email</h5>
            <p>
              <a href="info@pjoptechnologies.com" style={{ color: "white" }}>
                info@pjoptechnologies.com
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <p className="text-center">
              Copyright &copy; 2024 Example Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
