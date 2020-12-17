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
import { seriesSelector } from "../src/store/reducers/seriesReducer";
import css from "../styles/Game.module.css";
import Board from "../src/components/Board";
import Navbar from "../src/components/Navbar";
import Winner from "../src/components/Winner";
import { useSelector } from "react-redux";
import {
  resetGame,
  saveGame,
  setTileSymbol,
  saveToLocalStorage,
} from "../src/store/actionCreators";


export default function Home() {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();
  const [score, setScore] = useState({ scoreO: 0, scoreX: 0 });
  const [gameNumber, setGameNumber] = useState<number>(1)
  const [buttonText, setButtonText] = useState<string>("Game");
  const [seriesWinner, setSeriesWinner] = useState<string | undefined>(undefined)
  const players = useSelector((state: rootState) => playerSelector(state));
  const board = useSelector((state: rootState) => boardSelector(state));
  const isNext = useSelector((state: rootState) => isNextSelector(state));
  const series = useSelector((state: rootState) => seriesSelector(state));
  const winner = useSelector((state: rootState) => winnerSelector(state));
  const game = useSelector((state: rootState) => gameSelector(state));

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
    setScore({ scoreO: scoreO, scoreX: scoreX });
  };
  const startNewGame = () => {
    dispatch(saveGame(game));
    dispatch(resetGame());
  };

  // calculates series winner by comparing scores
  const calculateSeriesWinner = () => {
    if(score.scoreX > score.scoreO){
      setSeriesWinner(players.playerX.name);
    }
    else if (score.scoreO === score.scoreX){
      setSeriesWinner("Tie");
    }
    else{
      setSeriesWinner(players.playerO.name);
    }
  }

  useEffect(() => {
    calculateScores(series);
    setGameNumber(gameNumber+1);
    if (series.length === 5) {
      calculateSeriesWinner();
      dispatch(saveToLocalStorage(series));
      setButtonText("Series");
      setGameNumber(1);
    }
  }, [series]);

  // useEffect(() => {
  //     if(!players.playerX.name || !players.playerO.name){
  //         router.push('/');
  //     }
  // });

  return (
    <div>
      <Head>
        <title>TicTacToe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={css.gamePage}>
      {seriesWinner ? 
      <Winner winner={seriesWinner} score={Math.max(score.scoreX, score.scoreO)}/>
       : 
       <>
       <div className={css.heading}>
       <Typography variant="h2" gutterBottom>
         Game {gameNumber}
       </Typography>
     </div>
     <div className={css.boardWrapper}>
       <div className={css.scoreList}>
         <p className={css.turnText}>{isNext === "X" ? "Your turn" : ""}</p>
         <h2>{players.playerX.name}(X)'s Score</h2>
         {score.scoreX}
       </div>
       <Board
         onClick={handleClick}
         board={board}
         isDisabled={isDisabled()}
       />
       <div className={css.scoreList}>
         <p className={css.turnText}>{isNext === "O" ? "Your turn" : ""}</p>
         <h2>{players.playerO.name}(O)'s Score</h2>
         {score.scoreO}
       </div>
     </div> </>
        }
        <div>
          <button
            className={css.button}
            disabled={!isDisabled()}
            onClick={startNewGame}
          >
            Start Next {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
