import React from 'react';

export default function TodoForm(props) {
    return (
        <div>
        <input 
            type="text" 
            value={props.newItem} 
            onChange={props.addedItem}
            placeholder="Add Item" 
            onKeyPress={props.addKey}
        />
        <button
            onClick={props.addBtn}
        >Add Item</button>
        </div>     
    );
}