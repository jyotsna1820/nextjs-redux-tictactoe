import * as actionTypes from '../actionTypes';

const initialState = {
    currentSeries: [],
    historicalData: []
}

const seriesReducer = (state=initialState, action) => {
    switch(action.type){
        case(actionTypes.SAVE_GAME):
            console.log(state, "----seriesREd--")
            if(state.currentSeries.length < 5 ){
                return{
                    ...state,
                    currentSeries:[...state.currentSeries, action.payload.game]
                }       
            }
            else if (state.currentSeries.length === 5){
                return{
                    ...state,
                    historicalData:[...state.historicalData, state.currentSeries],
                    currentSeries:[]
                }
            }
        default:
            return state;     
    }
}

export const seriesSelector = (state: rootState) => state.series.currentSeries;
export const historySelector = (state: rootState) => state.series.historicalData;


export default seriesReducer;