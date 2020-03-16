export const initialState = {
    content: "Things to do"
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