import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import style from '../styles/Nav.module.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Linux Dev</Navbar.Brand>
          <Nav className="me-auto">
            <div className={style.containerLink}>
            <Link to="/home" className={style.link}>Home</Link>
            <Link to="/content" className={style.link}>Content</Link>
            <Link to="/description" className={style.link}>Description</Link>
            <Link to="/" className={style.link}>Exit</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;