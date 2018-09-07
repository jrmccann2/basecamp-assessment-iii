import React, { Component } from 'react';
import './App3.css';

var height = Number(prompt("How long (in feet)?"));
var width = Number(prompt("How wide (in feet)?"));

function sqFeet(height, width) {
    return height*width;
}

class App3 extends Component{
    render() {
        return (
            sqFeet(height, width)
        );
    }
}

export default App3;