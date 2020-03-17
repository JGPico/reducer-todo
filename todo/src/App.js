import React, { useState, useReducer } from 'react';
import { listReducer, initialState } from "./reducers/ListReducer";
import ToDoForm from "./components/ToDoForm,";
import ToDoList from "./components/ToDoList";
import './App.css';


function App() {

  // const defaultList = [
  //   {
  //     content: 'Build Muscle',
  //     id: 1,
  //     completed: false
  //   },
  //   {
  //     content: 'Put on Sunglasses',
  //     id: 2,
  //     completed: false
  //   }
  // ];

 // const [coreList, setCoreList] = useState(defaultList);

  // const [state, dispatch] = useReducer(listReducer, initialState);

  // const addContent = content => {
  //   const newContent = {
  //       content: content.content,
  //       id: Date.now(),
  //       completed: false
  //   };
  //   setCoreList([...coreList, newContent])
  // }


//   const toggleCompleted = clickedItemId => {

//     setCoreList(coreList.map(item => {
//       if (item.id === clickedItemId) {
//         return {
//           ...item,
//           completed: !item.completed
//         } 

//         } else {
//           return item;
//       }
//     }))
// }

// const clearCompleted = () => {
//   setCoreList(coreList.filter(item => item.completed !== true));
// }


  return (
    <div className="App">
      {/* <ToDoList 
      coreList={state}
      // toggleCompleted={toggleCompleted}
      // clearCompleted={clearCompleted}
      /> */}
      <ToDoForm 
      // addContent={addContent}
      />
    </div>
  );
}

export default App;
