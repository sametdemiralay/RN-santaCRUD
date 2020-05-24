import {combineReducers} from 'redux';
import activitiesReducer from './activitiesReducer';
import userTokenReducer from './userTokenReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  userToken: userTokenReducer,
});

export default rootReducer;
