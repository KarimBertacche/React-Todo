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
                    props.toDoList.map(el => {
                    return <Todo key={el.id} clicked={props.clicked} task={el.task} completed={el.completed} />;
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



