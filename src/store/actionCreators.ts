import * as actionTypes from "./actionTypes";
import { Dispatch } from "redux";

export const setTileSymbol = (position: number) => {
  return {
    type: actionTypes.SET_TILE,
    payload: {
      position,
    },
  };
};

export const setPlayers = (name1: string, name2: string) => {
  return {
    type: actionTypes.SET_PLAYERS,
    payload: {
      name1,
      name2,
    },
  };
};

export const saveGame = (game: gameState) => {
  return {
    type: actionTypes.SAVE_GAME,
    payload: {
      game,
    },
  };
};

export const resetGame = () => {
  return {
    type: actionTypes.RESET_GAME,
  };
};

export const resetSeries = () => {
    return {
      type: actionTypes.RESET_SERIES,
    };
  };

export const savingToLocalStorage = () => {
  return {
    type: actionTypes.LOCALSTORAGE_PROCESSING,
  };
};

export const errorSavingLocalStorage = (err: string) => {
  return {
    type: actionTypes.LOCALSTORAGE_ERROR,
    payload: { error: err },
  };
};
export const successSavingLocalStorage = () => {
  return {
    type: actionTypes.LOCALSTORAGE_SUCCESS,
  };
};

export const successFetchLocalStorage = (historicalData: seriesState) => {
  return {
    type: actionTypes.FETCH_LOCALSTORAGE_SUCCESS,
    payload: {
      historicalData,
    },
  };
};

export function saveToLocalStorage(series: series) {
  return (dispatch: Dispatch<any>) => {
    dispatch(savingToLocalStorage());
    try {
      const existingData = JSON.parse(localStorage.getItem("series") || "[]");
      localStorage.setItem("series", JSON.stringify([...existingData, series]));
    } catch (error) {
      dispatch(errorSavingLocalStorage(error));
    }
    dispatch(successSavingLocalStorage());
  };
}

export function getFromLocalStorage() {
  return (dispatch: Dispatch<any>) => {
    dispatch(savingToLocalStorage());
    try {
      const existingData = JSON.parse(localStorage.getItem("series") || "[]");
      return dispatch(successFetchLocalStorage(existingData));
    } catch (error) {
      dispatch(errorSavingLocalStorage(error));
    }
    dispatch(successSavingLocalStorage());
  };
}
