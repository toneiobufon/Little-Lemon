import React, { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import AvailableTimes from "./AvailableTimes.js";


function ReservationsForm (){


    //might be needed
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [ocassion, setOcassion] = useState('')

    const [validated, setValidated] = useState(false);

    const getForm =() =>{
        return (
            date &&
            time &&
            guests &&
            ocassion 
        );
    }


    const handleSubmit=(e) =>{
        const form = e.currentTarget ;
        if(form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true)
        alert('Reservation Confirmed');
        console.log('reserved', getForm())
    } 

    return (
        <>
        
        
         <Form validated={validated} onSubmit={handleSubmit} className="col-6 center">
         <h1>Reserve Here</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Choose a date</Form.Label>
                <Form.Control 
                type="date" 
                placeholder="Date"
                required
                onChange={(e)=> {
                    setDate(e.target.value)
                }}
                />
                
            </Form.Group>

            <Form.Group className="mb-3" placeholder="Check available times" type='number'  defaultValue=''>
                <Form.Label>Choose from the available times</Form.Label>
                <Form.Control as='select'  required 
                onChange={(e)=>{
                    setTime(e.target.value)
                }}
                >
                        <option value=''>Select a time</option>
                        <option value="17:00">17:00</option>
                        <option value='18:00'>18:00</option>
                        <option value='19:00'>19:00</option>
                        <option value='20:00'>20:00</option>
                        <option value='21:00'>21:00</option>
                        <option value='22:00'>22:00</option> 
                       
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Number of guests</Form.Label>
                <Form.Control required type="number"  defaultValue={0} min={1} max={10}
                onChange={(e)=>{
                    setGuests(e.target.value)
                }}
                />
            </Form.Group>

            <Form.Group className="mb-3" noValidate  >
                <Form.Label>Occasion</Form.Label>
                <Form.Control  as='select' aria-label="Select an option" required
                onChange={(e) =>{
                    setOcassion(e.target.value)
                }}
                
                >
                    <option value=''>Special ocassion?</option>
                    <option value='Birthday'>Birthday</option>
                    <option value='Anniversary'>Anniversary</option>
                    <option value='Other'>Other</option>
                </Form.Control>
            </Form.Group>
            <Button className="reserveButton" variant="primary" type="submit" disabled={!setValidated}>
                Book Now
            </Button>
        </Form> 


    

      </>
      
    )
    
}

export default ReservationsForm;