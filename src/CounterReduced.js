import React, { useReducer } from "react";

function counterReducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "Increment":
            return {value: state.value + 1};
        case "Decrement":
            return {value: state.value - 1};
        case "Reset":
            return {value: 0};
    }
}

function CounterReduced() {
    const [counterState, dispatch] = useReducer(counterReducer, {value: 0})

    return (
        <div>
            <h2>Counter:</h2>
            <div>{counterState.value}</div>
            <button onClick={() => dispatch({ type: "Increment" })}>+</button>
            <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "Reset" })}>reset</button>
        </div>
    )
}

export default CounterReduced