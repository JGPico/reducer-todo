import React, { useState, useReducer } from "react";
import ToDoList from "./ToDoList";
import { listReducer, initialState } from "../reducers/ListReducer";

function ToDoForm () {
    
    const [state, dispatch] = useReducer(listReducer, {todos: initialState});
    const [formInput, setFormInput] = useState('');


    const handleChanges = e => {
        setFormInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'Add_Content', payload: formInput})
        setFormInput('');
    }
    
    return (
        <div>
            {/* <ToDoList coreList={state.todos}/> */}
            <div>
            {state.todos.map((item, index) => (
                <div 
                onClick={() => dispatch({type: 'Toggle_Completed', index})}
                className={`item${item.completed ? ' completed' : ''}`}
                >
                    <p>{item.content}</p>
                </div>
            ))}
            <button
             type='button'
             onClick={() => dispatch({type: 'Remove_Completed'})}>
                Clear Completed
            </button>
        </div>
            <form onSubmit={handleSubmit}>
                <input
                label='item'
                name='item'
                id='item'
                placeholder='Input new task'
                value={formInput}
                onChange={handleChanges}/>

                <button>Add</button>
                
            </form>
        </div>
    )
}

export default ToDoForm;