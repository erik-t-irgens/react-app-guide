import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// This component has a class that is returning (rendering) the jsx data within the return() method. It looks like HTML, but it is actually JSX that is read by our workflow. The comment below describes what is actually being rednered in this instnace.

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi. I'm a react app!</h1>
        <p>This is really wokring!</p>
        <Person name="Erik" age="27" >Hobbies: Coding, writing music</Person>
        <Person name="Katie" age="30" />
        <Person name="Devon" age="30" />
      </div>
    );
    // This is what the above code is actually returning.
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi. I\'m a react app!'));
  }
}

export default App;
