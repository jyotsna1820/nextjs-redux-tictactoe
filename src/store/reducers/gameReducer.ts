import { calculateWinner } from '../../utils/helper';
import * as actionTypes from '../actionTypes';

const initialState = {
    playerX: {name: null, score:0},
    playerO: {name: null, score:0},
    winner:null,
    isNext: "X", 
    board: [Array(9).fill(null)]
}

const gameReducer = (state=initialState, action) => {
    switch (action.type){
        case(actionTypes.SET_PLAYERS):
            console.log("+++++++", action.payload)
            return {
                ...state,
                playerX: {...state.playerX, name:action.payload.name1},
                playerO: {...state.playerO, name:action.payload.name2}
            }
        case(actionTypes.SET_TILE):
            const pos = action.payload.position;
            const board = [...state.board.slice(0,pos), state.isNext, ...state.board.slice(pos+1)]
            const winner = calculateWinner(board)
            return {
                ...state,
                board,
                isNext: state.isNext==="X" ? "O" :"X",
                winner
            }
        default:
            return state;
    }
}

export default gameReducer;