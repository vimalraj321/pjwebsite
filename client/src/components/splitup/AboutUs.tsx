import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../../public/assets/images/logos/red-logo-text.jpg";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const courseRef = useRef<HTMLDivElement>(null);

  return (
    <div className="about-us-container">
      <div ref={courseRef} className="about-us">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={12} className="text-center mb-5">
              <h1 className="title" style={{ fontSize: "5vw" }}>
                About Us
              </h1>
              <h1 style={{ color: "#0dba4b" }}>
                <b>Who is Pjop And SR'S Academy</b>
              </h1>
            </Col>
            <Col lg={8} md={8} className="text-center mb-4">
              <p className="tp" style={{ fontStyle: "inherit" }}>
                <b>
                  It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum.
                  <br />
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book with best price for the
                  customer.
                  <br />
                  Additional service include data recovery, computer repair,
                  mobile service, network solutions and Technical support.
                </b>
              </p>
            </Col>
          
{/*<Col lg={4} md={4} className="text-center">
              <img src={about} alt="About Us" />
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
