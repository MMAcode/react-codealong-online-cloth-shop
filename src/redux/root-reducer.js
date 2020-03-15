import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import mainMenuReducer from './mainMenu/mainMenu.reducer'
import shopData from './shopData/shopData.reducer'



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}


// export default combineReducers({
//   // user: userReducer,
//   userReducer,
//   cart: cartReducer
// })

const rootReducer = combineReducers({
  userReducer,
  cart: cartReducer,
  mainMenu: mainMenuReducer,
  shop: shopData
})

export default persistReducer(persistConfig, rootReducer)