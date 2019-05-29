import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList(props) {
    return (
        <div>
        {
            props.toDoList.map(el => {
            return <Todo key={el.id} task={el.task} />;
            })
        }
        <TodoForm newItem={props.newItem} addedItem={props.addedInput} addBtn={props.addBtn} addKey={props.addKey}/>
        </div>
    );
}



