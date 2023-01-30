import React from "react";
import Navigation from "./Navigation";






export default function Footer(){
    return(
        <footer className="row">
            
           
            <div  className='footerInfo'>
                <Navigation/>
            </div>
            <span className="footerContact">
                <h1>Contact</h1>
                <p>42nd Street, Chicago, Illinois</p>
                <p>(239) 289-2214</p>
                <p>limoncito@littlelemon.com</p>

            </span>
            <span>
                <h1>Socials</h1>
                <div>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twiter</p>
                    <p>Tiktok</p>
                    

                </div>
            </span>
            <p>Copyright @ 2023 LITTLE LEMON RESTAURANT</p>
           
        </footer>
        
    )
}