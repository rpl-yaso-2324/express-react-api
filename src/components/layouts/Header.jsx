import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(params) {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/" className="nav-link">
								HOME
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/posts" className="nav-link">
								POSTS
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
