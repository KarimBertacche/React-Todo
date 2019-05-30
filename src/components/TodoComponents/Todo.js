import React from 'react';

export default function Todo(props) {
    return (
        <button 
            className="todo" 
            onClick={props.clicked} 
        >{props.task}</button>
    );
}