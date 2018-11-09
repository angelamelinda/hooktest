import React from 'react';
import {ThemeContext} from './App';

const AppChild = () => {
    return (
        <ThemeContext.Consumer>
            {(value) => {
                return (
                    <span>{value}</span>
                )
            }}
        </ThemeContext.Consumer>   
    )
}

export default AppChild;