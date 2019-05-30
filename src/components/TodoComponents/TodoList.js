import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList(props) {

    return (
        <div>
            <TodoForm 
            newItem={props.newItem} 
            addedItem={props.addedInput} 
            addBtn={props.addBtn} 
            addKey={props.addKey}
            />
            <div className="todo-box">
                {
                    props.toDoList.map(todo => {
                    return <Todo key={todo.id} clicked={props.clicked} task={todo.task} todoListID={todo.id} completed={todo.completed} />;
                    })
                }
            </div>
            <button 
                className="clear-btn"
                onClick={props.delete}
            >Clear Completed</button>
        </div>
    );
}



