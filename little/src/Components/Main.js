import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// images
import Greeksalad from '../images/Greeksalad.jpg';
import bruchetta from '../images/bruchetta.svg';
import LemonDessert from '../images/LemonDessert.jpg';
import Restaurantchef from '../images/Restaurantchef.jpg';
import HomeIcon from '../images/HomeIcon.svg'
import ChefsA from '../images/ChefsA.jpg';
import FoodPlatter from '../images/FoodPlatter.jpg'

export default function Main(){
    return(
        <frameElement>
            
        <Row >
            <Col>
            <article className="col-6-md">
            <h1> Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a table</button>
            </article>
            </Col>
            <Col>
            <img className="RestaurantChef" src={Restaurantchef} alt="Restaurant chef"/>
            </Col>
            
        </Row>
        <Row className="specialsHeading">
            <Col>
            <h1 className="specialsH1">Specials</h1>
            </Col>
            <Col>
            <a href="/">
                <img src={HomeIcon} alt="Home Icon"/>
            </a>
            </Col>
            <Col>
            
            <button className="orderOnline">Order Online</button>
            </Col>
        </Row>
        <Row className="specials">
            <Col>
            <article>
                <img src={Greeksalad} alt="Greek Salad"/>
                <h1>Greek Salad       $12.99</h1>
                <p>The famous greek salad of crispy lettuce, peppers, 
                    olives and our Chicago style feta cheese, garnished with 
                    crunchy garlic and rosemary croutons. </p>
                <button>Order a delivery</button>
            </article>
            </Col>
            <Col>
            <article>
                <img className="bruchetta" src={bruchetta} alt="Bruchetta"/>
                <h1>Bruchetta    $5.99</h1>
                <p>Our Bruschetta is made from grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. </p>
                <button>Order a delivery</button>
            </article>
            </Col>
            <Col>
            <article>
                <img src={LemonDessert} alt="Lemon Dessert"/>
                <h1>Lemon Dessert  $4.99</h1>
                <p>This comes straight from grandma’s recipe book, 
                    every last ingredient has been sourced and is as 
                    authentic as can be imagined.</p>
                <button>Order a delivery</button>
            </article>
            </Col>
           
        </Row>
        <Row>
            <Col>
            <article className="col-6-md">
                <h1> Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
            
            </article>
            </Col>
            <Col>
            <a href="/" >
                <img className="col-3-sm" src={ChefsA} alt="Restaurant chefs" />
                <img className="col-3-sm-2" src={FoodPlatter} alt="Food Platter"/>
            </a>
            </Col>
            </Row>
        </frameElement>
    )
}