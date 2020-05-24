import React, { useState } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import WindowResize from './WindowResize';
import Header from './Header';
import DisplayData from './DisplayData';
import CounterReduced from './CounterReduced';
import DisplayDataReduced from './DisplayDataReduced';

export const UserContext = React.createContext("");

function App() {
  const [userEmail, setUserEmail] = useState("");
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
