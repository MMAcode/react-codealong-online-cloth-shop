import { createSelector } from 'reselect'

const getUser = (state) => state.userReducer.currentUser;

export const selectUser = createSelector([getUser], (user) => user); 