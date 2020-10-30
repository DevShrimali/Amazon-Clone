//data layer logic
export const initialState={
    basket: [
        { id:"123",
        title: "New",
        price:599.99,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/61pHXsALAOL._SY355_.jpg"
    },
],
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
             // logic for removing item from basket

             // we cloned the basket
                let newBasket = [...state.basket];
            
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                if (index >=0) {
                    //item existe in basket, remove it...  
                    newBasket.splice(index, 1);
                } else {
                    console.warn (
                        `Cant remove product (id: ${action.id}) as its not in basket`
                   );
                }
            return { ...state, basket: newBasket };
            
            break;
            
        default:
            return state;
        }
}

export default reducer;

