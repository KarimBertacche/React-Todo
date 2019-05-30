import React from 'react';

export default function Todo(props) {
    return (
        <button 
            className="todo" 
            onClick={(event) => props.clicked(event, props.todoListID)} 
        >{props.task}</button>
    );
}