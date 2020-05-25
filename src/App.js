import React, { useState } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import WindowResize from './WindowResize';
import Header from './Header';
import DisplayData from './DisplayData';
import CounterReduced from './CounterReduced';
import DisplayDataReduced from './DisplayDataReduced';
import CounterValueContext from './CounterValueContext';

export const UserContext = React.createContext("");
export const CounterContext = React.createContext(0);

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <UserContext.Provider value={{
        userEmail: userEmail,
        login: () => setUserEmail("1rybak.tomasz@gmail.com")
      }}>
        <div>
          {userEmail ? userEmail : <button onClick={() => setUserEmail("1rybak.tomasz@gmail.com")}>Zaloguj</button>}
        </div>
        <Header></Header>
        <CounterClass></CounterClass>
        <CounterFunction></CounterFunction>
        <WindowResize></WindowResize>
        <DisplayData></DisplayData>
        <CounterReduced></CounterReduced>
        <DisplayDataReduced mail={userEmail}></DisplayDataReduced>
        <CounterContext.Provider value={{
          counterValue: counter,
          incrementCounter: () => setCounter(counter +1 ),
          decrementCounter: () => setCounter(counter -1 ),
          resetCounter: () => setCounter(0)
        }}>
          <CounterValueContext></CounterValueContext>
        </CounterContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
