import React, { useState } from 'react'; //No longer importing Component, because we aren't extended it with our app function, as we were with classes.
import './App.css';
import Person from './Person/Person';

// This component has a class that is returning (rendering) the jsx data within the return() method. It looks like HTML, but it is actually JSX that is read by our workflow. The comment below describes what is actually being rednered in this instnace.

// This update is the hooks method of creating a component.
const app = props => {
  // Now uses useState as a const.
  // personsState represents the state itself (access to the object, instead of this.state from before), setPersonsState represents the function to set state.
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Erik", age: 27 },
      { name: "Katie", age: 30 },
      { name: "Devon", age: 30 }
    ]
    // We remove OtherState from this object and create a new useState function to separate state. This is call state slices.
  });

  const [otherState, setOtherState] = useState('some other default value for state');

  // Now passing newName into the handle
  const handleSwitchName = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS
    // this.state.persons[0].name = "Erik Thomas Irgens"
    // instead of this.setState, we use setPersonsState to set state with the destuctured array const above.
    setPersonsState({
      persons: [
        { name: "Erik", age: 27 },
        { name: "Katie", age: 30 },
        { name: "Devon", age: 30 }
      ]
      // Notice that OtherState is no manually placed in here. This will actually make it so the updated state removes whatever you don't have in there. 
    });
  };


  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Erik", age: 27 },
        // This will take the value of our text input on persons, which we pass this down through props.
        { name: event.target.value, age: 30 },
        { name: "Devon", age: 30 }
      ]
    });
  };

  // No longer a render() method wrapping this return.
  return (
    <div className="App">
      <h1> Hi. I'm a react app!</h1>
      <p>This is really wokring!</p>
      <button onClick={handleSwitchName}>Switch name!</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        // Add te handleSwitchName to props to allow u to click the p tag itself to use a specific function!!!
        click={handleSwitchName}>Hobbies: Coding, writing music</Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        // Add te handleSwitchName to props to allow u to click the p tag itself to use a specific function!!!
        changed={nameChangedHandler}>Hobbies: Coding, writing music</Person>
    </div>
  );
  // This is what the above code is actually returning.
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi. I\'m a react app!'));

}

export default app;


