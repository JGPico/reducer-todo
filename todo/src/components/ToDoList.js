import React, { useReducer } from "react";
import { listReducer, initialState } from "../reducers/ListReducer";

const ToDoList = props => {

    const [state, dispatch] = useReducer(listReducer, {todos: initialState});

    return (
        <div>
            {props.coreList.map((item, index) => (
                <div 
                onClick={() => dispatch({type: 'Toggle_Completed', index})}
                className={`item${item.completed ? ' completed' : ''}`}
                >
                    <p>{item.content}</p>
                </div>
            ))}
            {/* <button
             type='button'
             onClick={props.clearCompleted}>
                Clear Completed
            </button> */}
        </div>
    )
}

export default ToDoList;