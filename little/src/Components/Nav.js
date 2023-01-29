import React from "react";
import Logo from '../images/Logo .svg'
// import Hammenu from '../images/🦆 Hammenu.svg';
// import Hammenu2 from '../images/🦆 Hammenu2.svg';



export default function Nav(){

    // const [navbarOpen, setNavbarOpen] = useState(false);

    // const handleToggle = () => {
    //     setNavbarOpen(!navbarOpen)
    // }

    return(
        
       <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <img src={Logo} alt="" />
            <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto" >
                   <li><a className="nav-link text-dark" href="/">Home</a></li>
                   <li><a className="nav-link text-dark" href="/about">About</a></li>
                   <li><a className="nav-link text-dark" href="/menu">Menu</a></li>
                   <li><a className="nav-link text-dark" href="/reservations">Reservations</a></li>
                   <li><a className="nav-link text-dark" href="/orderonline">Order Online</a></li>
                   <li><a className="nav-link text-dark" href="/login">Login</a></li>
                </ul>

            </div>
        </div>
       </nav>
                
    )
}