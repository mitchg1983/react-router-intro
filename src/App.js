import { Link, Outlet } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router Intro</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
