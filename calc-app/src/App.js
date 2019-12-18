import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div style={{overflow: 'hidden'}}>
      <div className="mt-md-5">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
