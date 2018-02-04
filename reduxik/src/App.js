import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { counter } from "./reducers";
import { action } from "./reducers";
import { createStore } from "redux";

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  increment = () => {
    const test1 = "123";
    store.dispatch({ type: "INCREMENT", value: test1 });
    const actualState = store.getState();
    localStorage.setItem("actualState", actualState);
  };

  decrement = () => {
    const test2 = "ggg";
    store.dispatch({ type: "DECREMENT", value: test2 });
    const actualState = store.getState();
    localStorage.setItem("actualState", actualState);
  };

  display = () => {
    console.log(localStorage.getItem("actualState"));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.display}>decrement</button>
      </div>
    );
  }
}

export default App;
