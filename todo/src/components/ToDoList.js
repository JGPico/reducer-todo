import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {


    return (
        <div>
            {props.coreList.map(element => (
                <ToDoItem
                key={element.id}
                item={element}
                toggleCompleted={props.toggleCompleted}/>
            ))}
            <button
             type='button'
             onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default ToDoList;