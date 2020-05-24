import React from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import WindowResize from './WindowResize';
import Header from './Header';
import DisplayData from './DisplayData';
import CounterReduced from './CounterReduced';
import Users from './DisplayDataReduced';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <CounterClass></CounterClass>
      <CounterFunction></CounterFunction>
      <WindowResize></WindowResize>
      <DisplayData></DisplayData>
      <CounterReduced></CounterReduced>
      <Users></Users>
    </div>
  );
}

export default App;
