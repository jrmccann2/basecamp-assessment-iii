import React, { Component } from 'react';
import './App2.css';

var person = prompt("What is your name?");


function greeting(person) {
    return "Hello and welcome " + person + "!";
} 

class App2 extends Component{
    render() {
        return (
            greeting(person)
        );
    }
}

export default App2;