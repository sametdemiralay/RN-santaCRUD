import * as actionTypes from './actionTypes';

const userNull = () => {
  return {
    type: actionTypes.USER_NULL,
    payload: 'null',
  };
};

const userNotNull = val => {
  return {
    type: actionTypes.USER_NOT_NULL,
    payload: val,
  };
};

export default {
  userNull,
  userNotNull,
};
