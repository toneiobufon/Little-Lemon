import React from "react";
import Nav from "./Nav";
import Header from "./Header";





export default function Footer(){
    return(
        <footer>
        
          
            <Header/>
        
            <div>
                <Nav/>
            </div>
            <span className="footerContact">
                <h1>Contact</h1>
                <p></p>

            </span>
            <span>
                <h1>Socials</h1>
                <div>

                </div>
            </span>
        </footer>
        
    )
}