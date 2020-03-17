export const initialState = [
    {
        content: 'Build Muscle',
        id: 1,
        completed: false
      },
      {
        content: 'Put on Sunglasses',
        id: 2,
        completed: false
      }
];

export const listReducer = (state, action) => {
    switch (action.type) {
        case "Toggle_Completed":
            return {
                todos: state.todos.map((t, index) => 
                index === action.index ? {...t, completed: !t.completed} : t)
        };
        case "Add_Content":
            return {
                ...state,
                todos: [...state.todos, {content: action.payload, id: Date.now(), completed: false,}]
            }
        case "Remove_Completed":
            return {
                
                todos: state.todos.filter(item => {
                    return item.completed !== true;
                })
            }    
        default: 
        return state;
    }
}