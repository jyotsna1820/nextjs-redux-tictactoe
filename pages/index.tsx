import React, { useEffect } from "react";
import Head from "next/head";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { resetGame, resetSeries } from "../src/store/actionCreators";
import Navbar from "../src/components/Navbar";
import Players from "../src/components/Players";
import css from "../styles/Game.module.scss";

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
          <h2 className={css.introHead}>
            The Ultimate TIC TAC TOE Championship!
          </h2>
          <p className={css.introText}>
            This tournament consists of 5 games. For each game, the <b>winner gets
            2 points</b> and the <b>loser gets 1 point</b>. In case of a draw, no one gets
            any points. The person scoring highest points after 5 games will be
            the ULTIMATE TIC-TAC-TOE champion! (woot woot!)
          </p>
          <div className={css.formWrapper}>
            <Players />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
