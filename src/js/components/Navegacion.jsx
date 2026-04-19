import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Frontend</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Tecnologias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">React</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Tailwind</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
