import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../public/assets/images/blog/blog-home/img2.jpg";

const navLinks = [
  {
    name: "Tutorial",
    link: "/tutorial",
  },
  {
    name: "Computer courses",
    link: "/courses",
  },
];

export const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="fixed-top navbar-dark bg-success">
      <Container fluid>
        <Navbar.Brand href="/" className="mr-auto">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-cont />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-link text-white">
              Home
            </Nav.Link>
            <span className="mx-4"></span>
            <Nav.Link href="/about" className="nav-link text-white">
              About
            </Nav.Link>
            <span className="mx-4"></span>

            <NavDropdown
              title="Training"
              id="basic-nav-dropdown"
              className="nav-link text-white"
            >
              {navLinks.map(({ name, link }, i) => (
                <NavDropdown.Item href={link}>{name}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
