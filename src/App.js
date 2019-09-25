import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableContainer from './TableContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>XYZ Shipping</p>
        <TableContainer></TableContainer>
      </header>
    </div>
  );
}

export default App;
