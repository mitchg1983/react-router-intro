import { Link } from "react-router-dom";
import React, { Component } from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router Intro</h1>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
