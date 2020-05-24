import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const activitiesReducer = (state = initialState.data, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionTypes.SAMCO_EKLE:
      return [
        ...state,
        {
          id: Math.random(),
          name: payload.name,
        },
      ];

    default:
      return state;
  }
};

export default activitiesReducer;
