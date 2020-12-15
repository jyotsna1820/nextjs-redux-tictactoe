import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../src/components/Navbar';
import { Grid, List, ListItem, Typography, ListItemText, Container } from '@material-ui/core';
import css from '../styles/Game.module.css';
import Board from '../src/components/Board';

export default function Home() {
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
                <h1>
                    Player X Score
                </h1>
            </div>            
            <Board />
            <div className={css.scoreList}>
                <h1>
                    Player 0 Score
                </h1>
            </div>
            </div>
        </div>
      </div>
      
)};
