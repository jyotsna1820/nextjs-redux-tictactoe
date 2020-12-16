import gameReducer from './gameReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    game: gameReducer
});

export default rootReducer;