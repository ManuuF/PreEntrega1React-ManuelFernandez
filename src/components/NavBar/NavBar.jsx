import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Haki Prices</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#">Estructuras</Nav.Link>
            <Nav.Link href="#">Cartas</Nav.Link>
            
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      
  );
}

export default NavBar;