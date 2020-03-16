import React, { useState, useReducer } from "react";
import { itemReducer, initialState } from "../reducers/ItemReducer";

function ToDoForm () {
    
    const [state, dispatch] = useReducer(itemReducer, initialState);
    const [formInput, setFormInput] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setFormInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }
    
    return (
        <div>
            <h1>{state.content}</h1>
            <form onSubmit={handleSubmit}>
                <input
                label='item'
                name='item'
                id='item'
                value={formInput}
                onChange={handleChanges}/>

                <button onClick={() => dispatch({type: 'Update_Content', payload: formInput})}>Add</button>
                
            </form>
        </div>
    )
}

export default ToDoForm;