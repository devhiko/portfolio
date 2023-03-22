import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: "1rem", borderBottom: "1px solid #a3a3a3" }}>
        <Container>
          <Navbar.Brand href="/" style={{ color: "#0dcaf0" }}>
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button as="a" href="#resume" variant="outline-info">
              Resume
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>{children}</div>

      <Navbar bg="dark" expand="lg" variant="dark" style={{ padding: "1rem" }}>
        <Container style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <Navbar.Brand href="/" style={{ color: "#0dcaf0" }}>
            My Portfolio
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
