import React from "react";
import Logo from '../images/Logo .svg'
import {Nav, Navbar} from 'react-bootstrap';

// import Hammenu from '../images/🦆 Hammenu.svg';
// import Hammenu2 from '../images/🦆 Hammenu2.svg';



export default function Navigation(){

    // const [navbarOpen, setNavbarOpen] = useState(false);

    // const handleToggle = () => {
    //     setNavbarOpen(!navbarOpen)
    // }

    return(
        
       <Navbar collapseOnSelect expand="lg">
        
            <a href="/">
                <img src={Logo} alt="Little Lemon" />
            </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/reservation">Reservation</Nav.Link>
                    <Nav.Link href="/orderonline">Order Online</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            
                
          

            {/* <div className="collapse navbar-collapse" show={navbarOpen}>
                <ul className="navbar-nav ms-auto" >
                   <li className="nav-item"><a className="nav-link text-dark" href="/">Home</a></li>
                   <li className="nav-item"><a className="nav-link text-dark" href="/about">About</a></li>
                   <li className="nav-item"><a className="nav-link text-dark" href="/menu">Menu</a></li>
                   <li className="nav-item"><a className="nav-link text-dark" href="/reservations">Reservations</a></li>
                   <li className="nav-item"><a className="nav-link text-dark" href="/orderonline">Order Online</a></li>
                   <li className="nav-item"><a className="nav-link text-dark" href="/login">Login</a></li>
                </ul>
            </div> */}
    
       </Navbar>
                
    )
}