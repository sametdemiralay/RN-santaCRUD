import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const userTokenReducer = (state = initialState.userToken, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionTypes.USER_NULL:
      return (state = payload);
    case actionTypes.USER_NOT_NULL:
      return (state = payload);
    default:
      return state;
  }
};

export default userTokenReducer;
