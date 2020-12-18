import React, { useEffect } from "react";
import Head from "next/head";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { resetGame, resetSeries } from "../src/store/actionCreators";
import { Typography } from "@material-ui/core";
import Navbar from "../src/components/Navbar";
import Players from "../src/components/Players";
import css from "../styles/Game.module.css";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(resetGame());
    dispatch(resetSeries());
  });
  return (
    <div className={css.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={css.gamePage}>
        <div className={css.heading}>
          <Typography variant="h2" gutterBottom>
            Welcome to TIC TAC TOE
          </Typography>
          <Typography variant="body1" gutterBottom>
            This tournament consists of 5 games. For each game, the winner gets
            2 points and the loser gets 1 point. In case of a draw, no one gets
            any points. The person scoring highest points after 5 games will be
            the ULTIMATE TIC-TAC-TOE champion! (woot woot!)
          </Typography>
          <div className={css.formWrapper}>
            <Players />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
