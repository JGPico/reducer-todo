import React from "react";

const ToDoItem = props => {

    return (
        <div 
        onClick={() => props.toggleCompleted(props.item.id)}
        className={`item${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.content}</p>
        </div>
    );
}

export default ToDoItem;