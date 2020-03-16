import React, { useState, useReducer } from "react";
// import { itemReducer, initialState } from "../reducers/ItemReducer";

function ToDoForm (props) {
    
    // const [state, dispatch] = useReducer(itemReducer, initialState);
    const [formInput, setFormInput] = useState({
        content: ""
    });

    const handleChanges = e => {
        e.preventDefault();
        setFormInput({
            ...formInput,
            content: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addContent(formInput);
        setFormInput({content: ""})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                label='item'
                name='item'
                id='item'
                placeholder='Input new task'
                value={formInput.content}
                onChange={handleChanges}/>

                <button>Add</button>
                
            </form>
        </div>
    )
}

export default ToDoForm;