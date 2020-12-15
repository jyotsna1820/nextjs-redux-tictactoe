import * as actionTypes from '../actionTypes';

const initialState = {
    currentSeries: {
        gameNumber: {}
    },
    historicalData: []
}

const seriesReducer = (state=initialState, action) => {
    switch(action.type){
        case(actionTypes.SAVE_GAME):
            return{
                ...state,
                currentSeries:{}
            }
    }

}