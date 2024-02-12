import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

import{Link, NavLink}  from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav className="nav-container">
          <NavLink to="/" ><i className="bi bi-brush"></i></NavLink>
            <div className="links-container">
              <NavLink to="/categoria/marcadores" >Marcadores</NavLink>
              <NavLink to="/categoria/tableros" >Tableros</NavLink>
              <NavLink to="/categoria/bitacoras" >Bitacoras</NavLink>
            </div>
            <NavLink href="#cart" className="cart-link"><CartWidget/></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
