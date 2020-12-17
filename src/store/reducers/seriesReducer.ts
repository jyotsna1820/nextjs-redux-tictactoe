import * as actionTypes from '../actionTypes';

const initialState = {
    currentSeries: [],
    historicalData: [],
    loading: false,
    error: ''
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
                    currentSeries:[]
                }
            }
        case(actionTypes.LOCALSTORAGE_PROCESSING):
            return {
                ...state,
                loading: true
            }
        case(actionTypes.LOCALSTORAGE_ERROR):
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case(actionTypes.LOCALSTORAGE_SUCCESS):
            return{
                ...state,
                loading: false,
                error: ''
            }
        case(actionTypes.FETCH_LOCALSTORAGE_SUCCESS):
            return{
                ...state,
                loading: false,
                error: '',
                historicalData: action.payload.historicalData
            }
        default:
            return state;     
    }
}

export const seriesSelector = (state: rootState) => state.series.currentSeries;
export const historySelector = (state: rootState) => state.series.historicalData;


export default seriesReducer;