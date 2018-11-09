import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    const { counter } = this.state;
    this.setState({
      counter : counter + 1,
    })
  }

  decrement = () => {
      const { counter } = this.state;
      this.setState({
        counter : counter - 1,
      })
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <span>{counter}</span>
      </div>
    );
  }
}

export default App;
