import React, { Component, useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const initialState = {
    counter: 0,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { counter: state.counter + 1};
        case 'decrement':
            return { counter: state.counter - 1}
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <button onClick={() => dispatch( {type: 'increment'} )}>Increment</button>
            <button onClick={() => dispatch( {type: 'decrement'} )}>Decrement</button>
            <span>{state.counter}</span>
        </div>
    );
}

export default App;
