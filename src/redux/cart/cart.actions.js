import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const remove1Item = (item) => ({
  type: CartActionTypes.REMOVE_1_ITEM,
  payload: item
});

export const removeAllItem = (item) => ({
  type: CartActionTypes.REMOVE_ALL_ITEM,
  payload: item
});