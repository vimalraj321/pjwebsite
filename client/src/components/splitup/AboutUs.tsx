import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../../public/assets/images/logos/red-logo-text.jpg";
//import { courseRef } from './CourseRef';

const AboutUs = () => {
  const courseRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={courseRef} className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="8" className="text-start">
            <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
              About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet nulla auctor, vestibulum magna sed,
              convallis ex. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec sed odio dui.
              Donec sed odio dui.
            </p>
          </Col>
          <Col lg="4" md="4" className="text-center">
            <img src={about} alt="About Us" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
