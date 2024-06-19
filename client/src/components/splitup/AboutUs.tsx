import  { useRef } from 'react';
//import { courseRef } from './CourseRef';

const AboutUs = () => {
    const courseRef = useRef<HTMLDivElement>(null);
  return (
    
    <div ref={courseRef} className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="6" className="text-center">
            <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
              About Us
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
            <img
              src={require("../assets/images/aboutus.jpg")}
              alt="About Us"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;