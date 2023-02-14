
import './App.css';
import Footer from './Components/Footer';


import Home from './Components/Home';
import AvailableTimes from './Components/AvailableTimes';


import Navigation from './Components/Navigation';
// import Main from './Components/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Components/About';
import Menu from './Components/Menu';
import BookingPage from './Components/BookingPage';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';
import { useReducer, useState } from 'react';

// import { useState } from 'react';






function App() {

  const [state, dispatch] = useReducer(updateTimes,InitializeTimes)

  function updateTimes(){
    return (
      AvailableTimes
    )
  }

  function InitializeTimes(){
    const [availableTimes, setAvailableTimes] = useState(AvailableTimes)

  }

 




  return (
    <>
   
    
      <Navigation />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/reservations' element={<BookingPage/>}></Route>
          <Route path='/orderonline' element={<OrderOnline/>}></Route>
          <Route path='login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <p className='text-center text-bold p-3'>Copyright @ 2023 : LITTLE LEMON RESTAURANT</p>
    
      </>
  );
  
}

export default App;
