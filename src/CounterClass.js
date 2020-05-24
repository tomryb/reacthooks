import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0
    }

    incrementCounter = () => this.setState({
        counter: this.state.counter + 1,
    })

    componentDidMount() {
        console.log("Mount");
    }

    componentDidUpdate() {
        console.log("Update");
    }

    componentWillUnmount() {
        console.log("Will unmount")
    }

    render() {
        console.log("Render")
        return (
            <div>
                <h2>Counter:</h2>
                <div>{this.state.counter}</div>
                <button onClick={this.incrementCounter}>+</button>
            </div>
        )
    }
}

export default Counter;