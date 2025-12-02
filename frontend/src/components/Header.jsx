import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      collapseOnSelect
      className="py-2"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          end
          className="d-flex align-items-center gap-2"
          style={{ fontSize: "1.15rem" }}
        >
          <img
            src="/image/logo.jpg"
            alt="Sison Eatery Logo"
            width="42"
            height="42"
            style={{ objectFit: "cover", borderRadius: 10 }}
          />
          <span className="fw-semibold">Sison Eatery</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto" style={{ fontSize: "1.05rem" }}>
            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
