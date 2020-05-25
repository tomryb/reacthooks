import React, { useEffect, useContext, useState } from "react";

function CounterButtonsContext() {


    return (
        <div>
            <h2>Counter:</h2>
            <div>{counterValue}</div>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    )
}
export default CounterButtonsContext