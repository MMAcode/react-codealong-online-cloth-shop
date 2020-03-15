import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'


import { persistStore } from 'redux-persist'


//set up middleware (it needs to be array, importing from above, currently array has 1 element:logger):

const middlewares = [logger]

//store set up,  get also the RETURN value of f. applyMiddleware
////...middleware will spread all elements of an array as indiv. arguments --> easier for future scaling up
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default { store, persistor };