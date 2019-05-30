import React from 'react';

export default function TodoForm(props) {
    return (
        <div className="input-wrapper">
            <input 
                type="text" 
                value={props.newItem} 
                onChange={props.addedItem}
                placeholder="Add Item" 
                onKeyPress={props.addKey}
            />
            <button
                className="submit-btn"
                onClick={props.addBtn}
            >Add Todo</button>
        </div>     
    );
}