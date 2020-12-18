import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar";
import css from "../styles/Game.module.css";
import { useDispatch, useSelector } from "react-redux";
import { historySelector } from "../src/store/reducers/seriesReducer";
import {playerSelector} from "../src/store/reducers/gameReducer";
import SeriesTable from "../src/components/SeriesTable";
import { getFromLocalStorage } from "../src/store/actionCreators";

const History = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromLocalStorage());
  }, []);

  const historicalData = useSelector((state: rootState) =>
    historySelector(state)
  );
  const players = useSelector((state: rootState) => playerSelector(state));

  return (
    <div>
      <Head>
        <title>TicTacToe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={css.gamePage}>
        <div className={css.heading}>Tournament History</div>
        {historicalData.map((series) => (
          <div className={css.historyTable}>
            <SeriesTable series={series}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
