
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
import { useState } from 'react';






function App() {

  const [AvailableTimes] = useState([
           {time: '17:00'},
           {time: '18:00'},
           {time: '19:00'},
           {time: '20:00'},
           {time: '21:00'},
           {time: '22:00'},

  ])


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
