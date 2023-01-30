
import './App.css';
import Footer from './Components/Footer';
// import Header from './Components/Header';

import Home from './Components/Home';


import Navigation from './Components/Navigation';
// import Main from './Components/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Components/About';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';






function App() {
  return (
    <>
    
      <Navigation />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/reservations' element={<Reservations/>}></Route>
          <Route path='/orderonline' element={<OrderOnline/>}></Route>
          <Route path='login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
  
}

export default App;
