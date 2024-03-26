import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';
const NavComp = () =>{
    return(
        <div>
            {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">BLOG APP</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="btn btn-primary me-5" to="/">Post</Link>
            <Link className="btn btn-primary me-5" to="/signin">SignIn</Link>
            <Link className="btn btn-primary me-5" to="/signup">signup</Link>
            <Link className="btn btn-primary me-5" to="/create">Create Post</Link>

          </Nav>
        </Container>
      </Navbar> */}
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Blog post</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
          </Nav>
          <Nav>
            <Nav.Link href="/signin">SignIn</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/createpost">Create Post</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
}
export default NavComp;