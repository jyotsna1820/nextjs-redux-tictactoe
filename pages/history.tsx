import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import {Typography } from '@material-ui/core';
import css from '../styles/Game.module.css';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { seriesSelector, historySelector } from '../src/store/reducers/seriesReducer';
import SeriesTable from '../src/components/SeriesTable';
import {getFromLocalStorage} from '../src/store/actionCreators';

const History = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFromLocalStorage())
    }, [])

    const historicalData = useSelector((state: rootState) => historySelector(state));
    console.log(historicalData, "ooooooo");

    return (
        <div>
        <Head>
          <title>TicTacToe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar />
        <div className={css.gamePage}>
            <div className={css.heading}>
                Tournament History
            </div>
            {historicalData.map(series => <SeriesTable series={series} />)}
            
        </div>
        </div>
    )
}

export default History;