import React from 'react';
import Nav from './components/Nav';
import About from './components/About';



import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Nav/>
      <main>
       
        <About></About>
        <Gallery></Gallery>
      </main>
      
    </div>
  );
}

export default App;
