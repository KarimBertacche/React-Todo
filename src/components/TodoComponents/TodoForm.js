import React from 'react';

export default function TodoForm(props) {
    return (
        <div className="input-wrapper">
            <div className="input-field">
                <button
                    className="submit-btn show-btn"
                    onClick={props.clearData}
                >Clear Storage Data</button>
                <button
                    className="submit-btn show-btn"
                    onClick={props.show}
                >Show All Todos</button>
                <input 
                    type="text" 
                    value={props.searchValue} 
                    onChange={props.searchInput}
                    placeholder="Search Item" 
                    // onKeyPress={props.addKey}
                />
                <button
                    className="submit-btn"
                    onClick={props.search}
                >Search Todo</button>
            </div>
            
            <div className="input-field">
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
            
        </div>     
    );
}