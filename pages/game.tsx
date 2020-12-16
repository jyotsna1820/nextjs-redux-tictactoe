import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import {Typography } from '@material-ui/core';
import css from '../styles/Game.module.css';
import Board from '../src/components/Board';
import {useSelector} from "react-redux";
import {resetGame, saveGame, setTileSymbol} from '../src/store/actionCreators';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import {playerSelector, isNextSelector, boardSelector, winnerSelector, gameSelector} from '../src/store/reducers/gameReducer';
import { seriesSelector } from '../src/store/reducers/seriesReducer';


export default function Home() {
    const dispatch: Dispatch<any> = useDispatch();
    const [score, setScore] = useState({scoreO: 0, scoreX: 0})
    const players = useSelector((state: rootState) => playerSelector(state));
    const board = useSelector((state: rootState) => boardSelector(state));
    const isNext = useSelector((state: rootState) => isNextSelector(state));
    const series = useSelector((state: rootState) => seriesSelector(state));
    const winner = useSelector((state: rootState) => winnerSelector(state));
    const game = useSelector((state: rootState) => gameSelector(state));

    const handleClick = (position:number) => {
        dispatch(setTileSymbol(position));
    }

    const isDisabled = ():boolean => winner ? true : false;

    const calculateScores = (series: series) => {
        let scoreX = 0;
        let scoreO = 0;
        for(let game of series){
            scoreX += game.playerX.score;
            scoreO += game.playerO.score;
        }
        setScore({scoreO: scoreO, scoreX:scoreX});
    };
    useEffect(() => calculateScores(series), [series]);

    const startNewGame = () => {
        dispatch(saveGame(game));
        dispatch(resetGame());
    } 

    return (
      <div>
        <Head>
          <title>TicTacToe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar />
        <div className={css.gamePage}>
            <div className={css.heading}>
            <Typography variant="h2" gutterBottom>
                Tournament Rules
            </Typography>
            <Typography variant="body1" gutterBottom>
                This tournament consists of 5 games. For each game, the winner gets 2 points and the loser gets 1 point.
                In case of a draw, no one gets any points. 
                The person scoring highest points after 5 games will be the ULTIMATE TIC-TAC-TOE champion! (woot woot!)
            </Typography>
            </div>
            <div className={css.boardWrapper}>
            <div className={css.scoreList}>
                <h2>
                    {players.playerX.name}(X)'s Score
                    
                </h2>
                {isNext==="X"? "Your turn": ""}
                {score.scoreX}
            </div>            
            <Board onClick={handleClick} board={board} isDisabled={isDisabled()}/>
            <div className={css.scoreList}>
                <h2>
                {players.playerO.name}(O)'s Score
                </h2>
                {isNext==="O"? "Your turn": ""}
                {score.scoreO}
            </div>
            </div>
            <div>
                <button className={css.button} disabled={!isDisabled()} onClick={startNewGame}>Start Next Game</button>
            </div>
        </div>
      </div>
      
)};
