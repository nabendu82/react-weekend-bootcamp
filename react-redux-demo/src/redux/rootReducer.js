import { combineReducers } from 'redux';
import eggReducer from './egg/eggReducer';
import chickenReducer from './chicken/chickenReducer';

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer
})

export default rootReducer;