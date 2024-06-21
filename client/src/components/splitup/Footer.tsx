import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 0",
        width: "100%",
      }}
    >
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20" style={{ color: "#20c997" }}>
              <b>Address</b>
            </h5>
            <p style={{ color: "white" }}>
              No:1 Velrampet Main Road, Velrampet, Puducherry-605 004.
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20" style={{ color: "#20c997" }}>
              <b>Phone</b>
            </h5>
            <p style={{ color: "white" }}>Mobile: +91 9942364752</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20" style={{ color: "#20c997" }}>
              <b>Email</b>
            </h5>
            <p style={{ color: "white" }}>
              Office :{" "}
              <a href="#" style={{ color: "white" }}>
                info@pjoptechnologies.com
              </a>{" "}
              <br />
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20" style={{ color: "#20c997" }}>
              <b>Social</b>
            </h5>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <li style={{ marginRight: "10px" }}>
                <a href="#" style={{ color: "white" }}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size="2x"
                    style={{ color: "blue" }}
                  />
                </a>
              </li>
              <li style={{ marginRight: "10px" }}>
                <a href="#" style={{ color: "white" }}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ color: "#C13584" }}
                  />
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2x"
                    style={{ color: "#0072b1" }}
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row
          className="justify-content-center"
          style={{ fontSize: "1rem", marginTop: "10px" }}
        >
          <Col lg="12" md="12" className="text-center">
            <p style={{ color: "white" }}>
              Copyrights © 2024 pjop technologies. All Rights Reserved.
            </p>
          </Col>
        </Row>
        <Row
          className="justify-content-center"
          style={{ fontSize: "1rem", marginTop: "10px" }}
        >
          <Col lg="12" md="12" className="text-center">
            <p style={{ color: "white" }}>Developed by Legends Tech Solution</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
