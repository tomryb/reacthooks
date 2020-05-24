import React, { useReducer } from "react";

function CounterReducer() {
    const [counterState, dispatch] = useReducer(counterReducer, 0)

    return (
        <div>
            <h2>Counter:</h2>
            <div>{counterState}</div>
            <button onClick={() => dispatch({ type: "Increment" })}>+</button>
            <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "Reset" })}>reset</button>
        </div>
    )
}

function counterReducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return 0
    };
}

export default CounterReducer