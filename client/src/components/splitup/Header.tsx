import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-bar-one">
      <Container>
        <p style={{ color: "white" }}>
          <b>No.4/A Velrampet Main Road Velrampet,Puducherry</b>
        </p>
      </Container>
      <div
        className="header-bar-two float-end clearfix"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ul>
          <a href="https://www.facebook.com">fj</a>
          <a href="https://www.instagram.com"></a>
          <a href="https://www.linkedin.com/home"></a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
