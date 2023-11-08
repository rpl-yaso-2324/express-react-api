import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom";


function Header(params) {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: 'linear-gradient(to right, rgba(13, 82, 242, 0.9), rgba(242, 13, 67, 0.9))' }} variant="light">
      <Container>
        <Navbar.Brand to="/" className='text-light'>EXPRESS.JS + REACT.JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link as={Link} to="/" className="nav-link text-light">HOME</Link>
            <Link as={Link} to="/posts" className="nav-link text-light">POSTS</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;