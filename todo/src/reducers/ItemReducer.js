export const initialState = {
    content: "Things to do",
    completed: false
};

export const itemReducer = (state, action) => {
    switch (action.type) {
        case "Update_Content":
        return {
            ...state,
            content: action.payload
        };
        default: 
        return state;
    }
}