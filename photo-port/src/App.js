import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import './App.css';
import Gallery from './components/Gallery';


function App() {
  
  return (

    <div>     
      <Nav />    
      <main>
        <ContactForm></ContactForm>
        <About></About>
        <Gallery></Gallery>
      </main>

    </div>
  );
}

export default App;
