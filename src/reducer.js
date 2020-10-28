//data layer logic
export const initialState={
    basket: [{
                id:"01114",
                title:"SanDisk Cruzer Blade 32GB USB Flash Drive",
                price:599.00,
                rating:4,
                image:"https://images-na.ssl-images-amazon.com/images/I/61pHXsALAOL._SY355_.jpg"
    }],
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

