import React from "react";
import Nav from "./Nav";



export default function Footer(){
    return(
        <footer>
        
            <img src='../images/Logo .svg' alt="Little Lemon Logo" />
        
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