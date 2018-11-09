import React, { Component, useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import AppChild from './AppChild';

export const ThemeContext = React.createContext('light');

const App = () => {
    const [value, setValue] = useState('light');

    return (
        <ThemeContext.Provider value={value}>
            <AppChild />
            <button onClick={() => setValue('dark')}>Change to Dark</button>
        </ThemeContext.Provider>   
    );
}

export default App;
