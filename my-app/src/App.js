// U51313007 
// src/App.js
import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Tour Comparison App</h1>
      <Gallery />
    </div>
  );
};

export default App;