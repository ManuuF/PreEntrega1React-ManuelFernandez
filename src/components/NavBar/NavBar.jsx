import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


function NavBar() {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">
              <Link to='/'>
                <h3>Haki Prices</h3>
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
            <NavLink to={`/category/estructuras`}>Estructuras</NavLink>
            <NavLink to={`/category/cartas`}>Cartas</NavLink>
            
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      
  );
}

export default NavBar;