import { useState } from 'react';
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import './App.css';
import Gallery from './components/Gallery';
// import Header from "./components/Header";
// import Footer from "./components/Footer";




function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (

    <header className="App-header" >   
      <Nav />    
      <main>
        <ContactForm></ContactForm>
        <About></About>
        <Gallery></Gallery>
      </main>

    </header>
  );
}

export default App;
