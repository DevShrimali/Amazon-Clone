//data layer logic
export const initialState={
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
            //Logic for adding itmen to basket
            break;
        case 'REMOVE_FROM_BASKET':
            return { state };
            // logic for removing item from basket
            break;
        default:
            return state;
        }
}

export default reducer;

