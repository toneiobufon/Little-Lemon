import React from "react";

export default function Main(){
    return(
        <>
        <section>
            
        </section>
        <div className="specialsHeading">
            <h1 className="specialsH1">Specials</h1>
            <button className="orderOnline">Order Online</button>
        </div>
        <section>
            <article>
                <img src="../images/greek salad.jpg" alt="Greek Salad"/>
                <h1>Greek Salad       $12.99</h1>
                <p>The famous greek salad of crispy lettuce, peppers, 
                    olives and our Chicago style feta cheese, garnished with 
                    crunchy garlic and rosemary croutons. </p>
                <button>Order a delivery</button>
            </article>
            <article>
                <img src="../images/bruchetta.svg" alt="Bruchetta"/>
                <h1>Bruchetta    $5.99</h1>
                <p>Our Bruschetta is made from grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. </p>
                <button>Order a delivery</button>
            </article>
            <article>
                <img src="../images/lemon dessert.jpg" alt="Lemon Dessert"/>
                <h1>Lemon Dessert  $4.99</h1>
                <p>This comes straight from grandma’s recipe book, 
                    every last ingredient has been sourced and is as 
                    authentic as can be imagined.</p>
                <button>Order a delivery</button>
            </article>
        </section>
        </>
    )
}