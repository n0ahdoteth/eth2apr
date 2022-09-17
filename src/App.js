import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import YieldBox from './components/YieldBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Nav /> */}
        <YieldBox />
      </header>
    </div>
  );
}

export default App;
