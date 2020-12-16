import React, {useState} from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import {Typography } from '@material-ui/core';
import css from '../styles/Game.module.css';
import Board from '../src/components/Board';
import {useSelector} from "react-redux";


export default function Home() {
    const [tile, setTile] = useState <Tile>(null);
    const game = useSelector(
        (state: rootState) => state.game)
    const handleClick = () => {
        const isNext = game.isNext;
        setTile(isNext);
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
                    {game.playerX.name}(X)'s Score
                </h2>
            </div>            
            <Board value={tile} onClick={handleClick}/>
            <div className={css.scoreList}>
                <h1>
                    Player 0 Score
                </h1>
            </div>
            </div>
        </div>
      </div>
      
)};
