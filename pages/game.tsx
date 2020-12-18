import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import {
  playerSelector,
  isNextSelector,
  boardSelector,
  winnerSelector,
  gameSelector,
} from "../src/store/reducers/gameReducer";
import {
  seriesSelector,
  seriesResultSelector,
} from "../src/store/reducers/seriesReducer";
import css from "../styles/Game.module.scss";
import Board from "../src/components/Board";
import Navbar from "../src/components/Navbar";
import Winner from "../src/components/Winner";
import SeriesTable from "../src/components/SeriesTable";
import { useSelector } from "react-redux";
import {
  resetGame,
  saveGame,
  setTileSymbol,
  saveToLocalStorage,
  resetSeries,
} from "../src/store/actionCreators";

export default function Home() {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();
  const players = useSelector((state: rootState) => playerSelector(state));
  const board = useSelector((state: rootState) => boardSelector(state));
  const isNext = useSelector((state: rootState) => isNextSelector(state));
  const series = useSelector((state: rootState) => seriesSelector(state));
  const winner = useSelector((state: rootState) => winnerSelector(state));
  const game = useSelector((state: rootState) => gameSelector(state));
  const seriesResult = useSelector((state: rootState) =>
    seriesResultSelector(state)
  );

  const handleClick = (position: number) => {
    dispatch(setTileSymbol(position));
  };
  const isDisabled = (): boolean => (winner ? true : false);
  const calculateScores = (series: series) => {
    let scoreX = 0;
    let scoreO = 0;
    for (let game of series) {
      scoreX += game.playerX.score;
      scoreO += game.playerO.score;
    }
  };

  const startNewGame = () => {
    dispatch(resetGame());
    if (series.length === 5) {
      dispatch(resetSeries());
    }
  };

  useEffect(() => {
    if (winner) {
      dispatch(saveGame(game));
    }
  }, [winner]);

  useEffect(() => {
    calculateScores(series);
    if (series.length === 5) {
      dispatch(saveToLocalStorage(series));
    }
  }, [series]);

  useEffect(() => {
      if(!players.playerX.name || !players.playerO.name){
          router.push('/');
      }
  });

  return (
    <div>
      <Head>
        <title>TicTacToe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={css.gamePage}>
          {seriesResult.seriesWinner ? (
            <div className={css.gameWrapper}>
            <Winner
              winner={seriesResult.seriesWinner}
              score={seriesResult.scores}
            />
            </div>
          ) : (
            <div className={css.gameWrapper}>
              <div className={css.heading}>
                <Typography variant="h2" gutterBottom>
                  Game {series.length + 1}
                </Typography>
              </div>
              <div className={css.boardWrapper}>
                <div className={css.scoreList}>
                  <h2>{players.playerX.name}(X)'s Score</h2>
                  {seriesResult.scores.scoreX}
                  <p className={css.turnText}>
                  {isNext === "X" && !winner ? "Your turn" : ""}
                </p>
                </div>
                <Board
                  onClick={handleClick}
                  board={board}
                  isDisabled={isDisabled()}
                />
                <div className={css.scoreList}>
                  <h2>{players.playerO.name}(O)'s Score</h2>
                  {seriesResult.scores.scoreO}
                  <p className={css.turnText}>
                  {isNext === "O" && !winner ? "Your turn" : ""}
                </p>
                </div>
              </div>
              </div>
          )}
        <div>
          <button
            className={css.button}
            disabled={!isDisabled()}
            onClick={startNewGame}
          >
            Start Next {series.length === 5 ? "Series" : "Game"}
          </button>
        </div>
        <SeriesTable series={series} />
      </div>
    </div>
  );
}
