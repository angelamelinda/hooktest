import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div className="App">
            <button onClick={() => setCounter( counter + 1 )}>Increment</button>
            <button onClick={() => setCounter( counter - 1 )}>Decrement</button>
            <span>{counter}</span>
        </div>
    );
}

export default App;
