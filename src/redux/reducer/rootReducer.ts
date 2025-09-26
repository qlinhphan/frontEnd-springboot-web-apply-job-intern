import { combineReducers } from 'redux';
import counterReducer from './counterReducer.ts';
import userReducer from './userReducer.ts';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

export default rootReducer;