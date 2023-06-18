import React, { Component} from "react";
import {navlinks} from '../../data/navbarLinks';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';

class NavigationBar extends Component{
    constructor (props) {
        super(props)
    }

    render() {
        return(
          <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {navlinks.map((link) => {
                return(
                  <Nav.Link key={link.id} href={link.href} className="linkNav"> {link.title}</Nav.Link>
                )
              })}
            </Nav>
          </Container>
        </Navbar>
        )
    }
}

export default NavigationBar