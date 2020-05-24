import React from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import WindowResize from './WindowResize';
import Header from './Header';
import DisplayData from './DisplayData';
import CounterReducer from './CounterReducer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <CounterClass></CounterClass>
      <CounterFunction></CounterFunction>
      <WindowResize></WindowResize>
      <DisplayData></DisplayData>
      <CounterReducer></CounterReducer>
    </div>
  );
}

export default App;
