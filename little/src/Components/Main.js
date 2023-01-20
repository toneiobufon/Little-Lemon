import React from "react";

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
        <>
        <section>
            <article>
            <h1> Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a table</button>
            </article>
            <img className="RestaurantChef" src={Restaurantchef} alt="Restaurant chef"/>
            
        </section>
        <div className="specialsHeading">
            <h1 className="specialsH1">Specials</h1>
            <a href="/">
                <img src={HomeIcon} alt="Home Icon"/>
            </a>
            
            <button className="orderOnline">Order Online</button>
        </div>
        <section>
            <article>
                <img src={Greeksalad} alt="Greek Salad"/>
                <h1>Greek Salad       $12.99</h1>
                <p>The famous greek salad of crispy lettuce, peppers, 
                    olives and our Chicago style feta cheese, garnished with 
                    crunchy garlic and rosemary croutons. </p>
                <button>Order a delivery</button>
            </article>
            <article>
                <img className="bruchetta" src={bruchetta} alt="Bruchetta"/>
                <h1>Bruchetta    $5.99</h1>
                <p>Our Bruschetta is made from grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. </p>
                <button>Order a delivery</button>
            </article>
            <article>
                <img src={LemonDessert} alt="Lemon Dessert"/>
                <h1>Lemon Dessert  $4.99</h1>
                <p>This comes straight from grandma’s recipe book, 
                    every last ingredient has been sourced and is as 
                    authentic as can be imagined.</p>
                <button>Order a delivery</button>
            </article>
           
        </section>
        <section>
            <article>
                <h1> Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
            
            </article>
            <a href="/">
                <img className="ChefsA" src={ChefsA} alt="Restaurant chefs"/>
                <img className="FoodPlatter" src={FoodPlatter} alt="Food Platter"/>
            </a>
            </section>
        </>
    )
}