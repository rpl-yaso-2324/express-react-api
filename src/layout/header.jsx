import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom";


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
      <Container>
        <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink>
              <Link as={Link} to="/" className="nav-link">HOME</Link>
            </NavLink>
            <NavLink>
              <Link as={Link} to="/posts" className="nav-link">POSTS</Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;