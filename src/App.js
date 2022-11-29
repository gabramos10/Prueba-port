import {React, useState, useEffect } from 'react';
import Cover from './component/Cover/Cover';
import './App.css';
import Barra from './component/Barra/barra';
import About from './component/about/About';

function App() {
  const [scroll,setScroll]= useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);    
  }, [scroll]);


  return (
    <div className="App">
      <Barra isScrolling={scroll}></Barra>
      <Cover></Cover>
      <About></About>
      
    </div>
  );
}

export default App;
