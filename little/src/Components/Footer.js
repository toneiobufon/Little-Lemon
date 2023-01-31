import React from "react";
import Navigation from "./Navigation";
import { Col,Row } from "react-bootstrap";






export default function Footer(){
    return(
        
       
            <Row>
                <Col className="footerNav">
                        <Navigation/>
                </Col>
                <Col>
                    <h1>Contact</h1>
                    <p>42nd Street, Chicago, Illinois</p>
                    <p>(239) 289-2214</p>
                    <p>limoncito@littlelemon.com</p>
                </Col>
                <Col>
                    <h1>Socials</h1>
                    <div>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twiter</p>
                        <p>Tiktok</p>
                    </div>
                </Col>
            </Row>
       
        
    )
}