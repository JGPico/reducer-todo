import React, { useReducer } from "react";
import { listReducer, initialState } from "../reducers/ListReducer";

const ToDoItem = props => {

    const [state, dispatch] = useReducer(listReducer, {todos: initialState});

    return (
        <div 
        onClick={() => dispatch({type: 'Toggle_Completed', props.index})}
        className={`item${props.item.completed ? ' completed' : ''}`}
        >
            <p>{props.item.content}</p>
        </div>
    );
}

export default ToDoItem;