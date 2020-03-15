import CartActionTypes from './cart.types'
import { addItemToCartArrayReturnCartState as addItemToCartArrayAdd1ToCounterReturnCartState, remove1item } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [{
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
    count: 3
  }],
  // cartCounter: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case CartActionTypes.ADD_ITEM:
      // return {
      // ...state,
      // cartItems: [...state.cartItems, action.payload]
      // }
      // WE SHOULD PROBABLY MAKE NEW OBJECT AS ABOVE, BUT CURRENTLY EVEN MY METHOD = UPDATING ARRAY AND STATE SEEMS WORKING! - 
      // IF OBJECT UPDATED (NOT NEW CREATED), DOM WILL NOT RE-RENDER!!!

      // following actions don't create new state object/array!      
      // state.cartItems.push(action.payload);

      // addItemToCartArray(action.payload, state);
      // return state;
      return { ...addItemToCartArrayAdd1ToCounterReturnCartState(action.payload, state) };

    case CartActionTypes.REMOVE_1_ITEM:
      return { ...state, cartItems: remove1item(action.payload, state.cartItems) }

    case CartActionTypes.REMOVE_ALL_ITEM:
      return { ...state, cartItems: state.cartItems.filter(item => item.name !== action.payload.name) }

    default: return state;
  }
}

export default cartReducer;