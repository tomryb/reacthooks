import React, { useState, useEffect, useContext } from "react";
import { CounterContext } from './App';


function CounterValueContext() {

    const {counterValue, incrementCounter, decrementCounter, resetCounter} = useContext(CounterContext);

return (
    <div>
        <h2>Counter:</h2>
        <div>{counterValue}</div>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
)
}

export default CounterValueContext