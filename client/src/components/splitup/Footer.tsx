import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="6" className="text-center">
            <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
              PJOP Computers
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet nulla auctor, vestibulum magna sed,
              convallis ex. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec sed odio
              dui. Donec sed odio dui.
            </p>
          </Col>
          <Col lg="6" md="6" className="text-center">
            <ul>
              <li>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/home">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;