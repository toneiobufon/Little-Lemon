import React, { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import availableTimes from "./availableTimes.js";


function ReservationsForm (){

    const [validated, setValidated] = useState(false);

    const handleSubmit=(event) =>{
        const form = event.currentTarget ;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
    } 

    return (
        <>
        
        
         <Form noValidate validated={validated} onSubmit={handleSubmit} className="col-6 center">
         <h1>Reserve Here</h1>
            <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Choose a date</Form.Label>
                <Form.Control 
                type="date" 
                placeholder="Date"
                required
                />
                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" placeholder="Check available times" type='number' controlId="validationCustom02" defaultValue=''>
                <Form.Label>Choose from the available times</Form.Label>
                <Form.Control as='select' placeholder="" required >
                        <option value=''>Select a time</option>
                     

                        
                        <option value="17:00">17:00</option>
                        <option value='18:00'>18:00</option>
                        <option value='19:00'>19:00</option>
                        <option value='20:00'>20:00</option>
                        <option value='21:00'>21:00</option>
                        <option value='22:00'>22:00</option> 
                       
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom03" hasValidation>
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control controlId="guests" required type="number"  defaultValue={0} min={1} max={10}/>
            </Form.Group>

            <Form.Group className="mb-3" noValidate hasValidation  controlId="validationCustom04">
                <Form.Label>Occasion</Form.Label>
                <Form.Control  as='select' aria-label="Select an option" required>
                    <option value=''>Special ocassion?</option>
                    <option value='Birthday'>Birthday</option>
                    <option value='Anniversary'>Anniversary</option>
                    <option value='Other'>Other</option>
                </Form.Control>
            </Form.Group>
            <Button className="reserveButton" variant="primary" type="submit">
                Book Now
            </Button>
        </Form> 


    

      </>
      
    )
    
}

export default ReservationsForm;