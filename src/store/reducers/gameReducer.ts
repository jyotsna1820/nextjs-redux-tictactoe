import { calculateWinner } from '../../utils/helper';
import * as actionTypes from '../actionTypes';

const initialState = {
    playerX: {name: null, score:0},
    playerO: {name: null, score:0},
    winner:'',
    isNext: "X" as const, 
    board: [...Array(9).fill(null)]
}

const gameReducer = (state=initialState, action) => {
    switch (action.type){
        case(actionTypes.SET_PLAYERS):
            
            return {
                ...state,
                playerX: {...state.playerX, name:action.payload.name1},
                playerO: {...state.playerO, name:action.payload.name2}
            }
        case(actionTypes.SET_TILE):
            let scoreX = 0;
            let scoreO = 0;
            const pos = action.payload.position;
            const board = [...state.board.slice(0,pos), state.isNext, ...state.board.slice(pos+1)]
            const winner = calculateWinner(board);
            if (winner && winner !== "T") {
                scoreX = winner === "X" ? 2 : 1
                scoreO = winner === "O" ? 2 : 1
            }
            return {
                ...state,
                board,
                isNext: state.isNext==="X" ? "O" :"X",
                winner,
                playerX: {...state.playerX, score: scoreX},
                playerO: {...state.playerO, score: scoreO}

            }
        case(actionTypes.RESET_GAME):
            return {
                ...initialState,
                playerX: {...state.playerX, score: initialState.playerX.score},
                playerO: {...state.playerO, score: initialState.playerO.score}
            }
        default:
            return state;
    }
}

export const playerSelector = (state: rootState) => {
    return {
        playerO: state.game.playerO,
        playerX: state.game.playerX
    };
};
export const gameSelector = (state: rootState) => state.game;

export const boardSelector = (state: rootState) => state.game.board;

export const winnerSelector = (state:rootState) => state.game.winner;

export const isNextSelector = (state: rootState) => state.game.isNext;

export default gameReducer;