import React from "react";
import Logo from '../images/Logo .svg'
import {Nav, Navbar,Container,Offcanvas} from 'react-bootstrap';





export default function Navigation(){



    return(

        <>
        {['lg'].map((expand) => (
          <Navbar key={expand}  expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <a href="/">
                    <img src={Logo} alt="Little Lemon" />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/reservation">Reservation</Nav.Link>
                    <Nav.Link href="/orderonline">Order Online</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                 
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
       
    
        
    //    <Navbar  className="Navbar" collapseOnSelect expand="lg"> 
    //         <a href="/">
    //             <img src={Logo} alt="Little Lemon" />
    //         </a>
    //         <Navbar.Toggle aria-controls='responsive-navbar-nav' closeButton>
               
    //         </Navbar.Toggle>
                
        
    //         <Navbar.Collapse id="responsive-navbar-nav" >
    //             <Nav className="ms-auto">
    //                 <Nav.Link href="/">Home</Nav.Link>
    //                 <Nav.Link href="/about">About</Nav.Link>
    //                 <Nav.Link href="/menu">Menu</Nav.Link>
    //                 <Nav.Link href="/reservation">Reservation</Nav.Link>
    //                 <Nav.Link href="/orderonline">Order Online</Nav.Link>
    //                 <Nav.Link href="/login">Login</Nav.Link>

    //             </Nav>
    //         </Navbar.Collapse>
    
    //    </Navbar>        
    
    
    )
   
}