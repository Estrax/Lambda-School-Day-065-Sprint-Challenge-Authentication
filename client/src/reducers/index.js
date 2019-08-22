import { combineReducers } from 'redux';
import jokes from './jokes';
import auth from './auth';

export default combineReducers({
    jokes,
    auth
});