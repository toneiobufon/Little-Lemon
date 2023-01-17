import { Helmet,HelmetProvider } from 'react-helmet-async';
import './App.css';
import Header from './Components/Header.js';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
