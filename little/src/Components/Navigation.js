import React from "react";
import Logo from '../images/Logo .svg'
import {Nav, Navbar} from 'react-bootstrap';





export default function Navigation(){



    return(
    
        
       <Navbar className="Navbar" collapseOnSelect expand="lg"> 
            <a href="/">
                <img src={Logo} alt="Little Lemon" />
            </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/reservation">Reservation</Nav.Link>
                    <Nav.Link href="/orderonline">Order Online</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>

                </Nav>
            </Navbar.Collapse>
    
       </Navbar>        
    )
}