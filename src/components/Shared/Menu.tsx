import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/ambev-tech-logo.svg";

export function Menu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image width="100%" src={logo} alt="Empório" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Cervejas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/beers">Listagem</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beers/create">Adicionar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}