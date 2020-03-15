import {UserActionTypes} from './user.types'

//returning objects
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

