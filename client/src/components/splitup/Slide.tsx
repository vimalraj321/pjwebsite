import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import ExampleCarouselImage from "../../../public/assets/images/Designer2.png";

const CarouselFadeExample: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="mt-10">
      <Row>
        <Col className="p-0">
          <Carousel
            fade
            interval={3000}
            activeIndex={index}
            onSelect={handleSelect}
            style={{ width: "100vw" }}
            indicators={true}
          >
            <Carousel.Item>
              <Row className="m-0">
                <Col className="p-0" xs="12" md="6">
                  <img
                    src={ExampleCarouselImage}
                    alt="Contact Us"
                    className="contact-image"
                  />
                </Col>
                <Col className="p-0">
                  <Form className="contact-form p-3">
                    <h2>Form</h2>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="m-0">
                <Col className="p-0" xs="12" md="6">
                  <img
                    src={ExampleCarouselImage}
                    alt="Contact Us"
                    className="d-block w-100 "
                  />
                </Col>
                <Col className="p-0">
                  <Form className="contact-form p-3">
                    <h2>Contact Us</h2>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselFadeExample;
