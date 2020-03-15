import { createSelector } from 'reselect'

//input selector
const selectCart = state => state.cart;

//output selectors
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const cartItemsCount = createSelector([selectCartItems], (cartItems => cartItems.reduce((total, item) => total + item.count, 0)));
export const cartTotalToPay = createSelector([selectCartItems], (cartItems => cartItems.reduce((total, item) => total + item.count * item.price, 0)));
export const cartHidden = createSelector(selectCart,cart=>cart.hidden)