import { Helmet,HelmetProvider } from 'react-helmet-async';
import './App.css';
import {Header} from './Components/Header';
import {Nav} from './Components/Nav';
import {Main} from './Components/Main';
import {Footer} from './Components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Little Lemon Restaurant"/>
      </Helmet>
      <Helmet>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      </Helmet>
      <Helmet>
      <meta name="og:description" content="Try our unique dishes"/>
      </Helmet>
      <Helmet>
      <meta name="og:image" content="./images/Logo .svg"/>
      </Helmet>


    
    <>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    </>
    </HelmetProvider>
  );
}

export default App;
