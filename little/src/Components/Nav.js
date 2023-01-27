import React from "react";
import Hammenu from '../images/🦆 Hammenu.svg';
// import Hammenu2 from '../images/🦆 Hammenu2.svg';



export default function Nav(){

    // const [navbarOpen, setNavbarOpen] = useState(false);

    // const handleToggle = () => {
    //     setNavbarOpen(!navbarOpen)
    // }

    return(
        
        // <nav className="navBar">
        //     <button onClick={handleToggle}>{navbarOpen ? ('X') : (<img src={Hammenu} alt='Open'/>) }</button>
            

        //     <ul className='navBar'>
        //         <li><a className="navBar" href="/">Home</a></li>
        //         <li><a className="navBar" href="/about">About</a></li>
        //         <li><a className="navBar" href="/menu">Menu</a></li>
        //         <li><a className="navBar" href="/reservations">Reservations</a></li>
        //         <li><a className="navBar" href="/orderonline">Order Online</a></li>
        //         <li><a className="navBar" href="/login">Login</a></li>
        //     </ul>
            
        // </nav>


        <nav class="navbar navbar-light light-blue lighten-4">

  {/* <!-- Navbar brand --> */}
  <img class="navbar-brand" href={Hammenu}alt="Menu"/>

  {/* <!-- Collapse button --> */}
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span> <img src={Hammenu}/></button>

  {/* <!-- Collapsible content --> */}
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    {/* <!-- Links --> */}
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/menu">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/reservations">Reservations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/orderonline">Order Online</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
    </ul>
    {/* <!-- Links --> */}

  </div>
  {/* <!-- Collapsible content --> */}

</nav>

            
    )
}