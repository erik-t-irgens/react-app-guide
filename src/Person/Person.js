import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I'm a person, my name is {props.name} and I'm {props.age}.</p>
            <p>{props.children}</p>
        </div>

    )
}

export default Person;