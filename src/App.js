import React from 'react';
import './App.css';
import CounterC from './CounterC';
import CounterF from './CounterF';
import WindowResize from './WindowResize';
import Header from './Header';
import DisplayData from './DisplayData';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <CounterC></CounterC>
      <CounterF></CounterF>
      <WindowResize></WindowResize>
      <DisplayData></DisplayData>
    </div>
  );
}

export default App;
