//import component Bootstrap-React
import { Navbar, Container, Nav } from 'react-bootstrap';

//import react router-dom
import {Link} from "react-router-dom";

function Header() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link to="/" className="nav-link">HOME</Nav.Link>
                  <Nav.Link as={Link} to="/posts" className="nav-link">POSTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default Header;