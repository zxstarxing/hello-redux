import {combineReducers} from 'redux';
import user from './user';
import counter from './counter'

var rootReducer = combineReducers({
    user,
    counter
})

export default rootReducer;