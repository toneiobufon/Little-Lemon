import React from "react";
import Navigation from "./Navigation";
import { Col,Row } from "react-bootstrap";
import {Instagram,Facebook,Twitter,Tiktok } from "react-bootstrap-icons"






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
                        <div className="iconSocial">
                            <Instagram/>
                            <p>Instagram</p>
                        </div>
                        <div className="iconSocial">
                            <Facebook/>
                            <p>Facebook</p>
                        </div>
                        <div className="iconSocial">
                            <Twitter/>
                            <p>Twitter</p>
                        </div>
                        <div className="iconSocial">
                            <Tiktok/>
                            <p>Tiktok</p>
                        </div>
                        
                        
                    </div>
                </Col>
            </Row>
       
        
    )
}