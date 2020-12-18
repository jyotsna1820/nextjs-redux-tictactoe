import * as actionTypes from "../actionTypes";

const initialState = {
  currentSeries: [],
  historicalData: [],
  loading: false,
  error: "",
  seriesWinner: "",
  scoreX: 0,
  scoreO: 0,
};
const calculateScores = (series: series) => {
  let scoreX = 0;
  let scoreO = 0;
  for (let game of series) {
    scoreX += game.playerX.score;
    scoreO += game.playerO.score;
  }
  return [scoreX, scoreO];
};

// calculates series winner by comparing scores
const calculateSeriesWinner = (scoreX: number, scoreO: number): string => {
  if (scoreX > scoreO) {
    return "X";
  } else if (scoreO === scoreX) {
    return "T";
  } else {
    return "O";
  }
};

const seriesReducer = (state = initialState, action: actionState) => {
  switch (action.type) {
    case actionTypes.SAVE_GAME:
      const currentSeries = [...state.currentSeries, action.payload.game];
      const [scoreX, scoreO] = calculateScores(currentSeries);
      if (currentSeries.length < 5) {
        return {
          ...state,
          currentSeries: currentSeries,
          scoreX,
          scoreO,
        };
      } else if (currentSeries.length === 5) {
        const seriesWinner = calculateSeriesWinner(scoreX, scoreO);
        return {
          ...state,
          currentSeries: currentSeries,
          seriesWinner,
          scoreX,
          scoreO,
        };
      }
    case actionTypes.RESET_SERIES:
          return {
            ...state,
            currentSeries: [],
            seriesWinner: "",
            scoreO: 0,
            scoreX: 0,
          };
    case actionTypes.LOCALSTORAGE_PROCESSING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOCALSTORAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case actionTypes.FETCH_LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        historicalData: action.payload.historicalData,
      };
    default:
      return state;
  }
};

export const seriesSelector = (state: rootState) => state.series.currentSeries;
export const historySelector = (state: rootState) =>
  state.series.historicalData;
export const seriesResultSelector = (state: rootState) => {
  return {
    seriesWinner: state.series.seriesWinner,
    scores: { scoreX: state.series.scoreX, scoreO: state.series.scoreO },
  };
};

export default seriesReducer;
