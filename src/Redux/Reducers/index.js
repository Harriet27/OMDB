import { combineReducers } from 'redux';
import { movieReducer } from './MovieReducer';

export default combineReducers({
    movie : movieReducer,
});
