import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from "./components/Gallery";
import {capitalizeFirstLetter} from '../src/utils/helper';
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
      
    </div>
  );
}

export default App;
