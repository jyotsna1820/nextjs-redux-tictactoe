import gameReducer from './gameReducer';
import {combineReducers} from 'redux';
import seriesReducer from './seriesReducer';

const rootReducer = combineReducers({
    game: gameReducer,
    series: seriesReducer
});

export default rootReducer;