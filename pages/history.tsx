import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import {Typography } from '@material-ui/core';
import css from '../styles/Game.module.css';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { seriesSelector, historySelector } from '../src/store/reducers/seriesReducer';

const History = () => {
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
            
        </div>
        </div>
    )
}