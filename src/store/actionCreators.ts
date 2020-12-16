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

export const saveGame = (game:gameState) => {
    return {
        type:actionTypes.SAVE_GAME,
        payload: {
            game
        }
    }
}

export const resetGame = () => {
    return {
        type: actionTypes.RESET_GAME
    }
}