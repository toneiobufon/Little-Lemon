import React from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Reservations (){
    return (
        <>
        
        
         <Form className="col-6 center">
         <h1>Reserve Here</h1>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Choose a date</Form.Label>
                <Form.Control type="date" placeholder="Date"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Choose from the available times</Form.Label>
                <Form.Select >
                        <option> Check available times</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control controlId="guests" type="number"  placeholder="enter number of guests"min={1} max={10}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="occasion">
                <Form.Label>Occasion</Form.Label>
                <Form.Select>
                    <option value='Birthday'>Birthday</option>
                    <option value='Anniversary'>Anniversary</option>
                    <option value='Other'>Other</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Book Now
            </Button>
        </Form> 


    

      </>
      
    )
    
}

export default Reservations;