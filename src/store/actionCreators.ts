import * as actionTypes from './actionTypes';

export const setTileSymbol = (position:number) => {
    return {
        type: actionTypes.SET_TILE,
        payload: {
            position
        }
    }
};

export const setPlayers = (name1:string, name2:string) => {
    return {
        type: actionTypes.SET_PLAYERS,
        payload: {
            name1,
            name2
        }
    }
}