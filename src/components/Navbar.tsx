import React from 'react';
import Link from 'next/link';
import {AppBar,Toolbar, IconButton, Button, Typography} from '@material-ui/core';
import css from "../../styles/Game.module.scss";

export default function Navbar(){
    return (
        <AppBar style={{ background:"#f6b93b"}} position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
                <Link href="/">
                  <a className={css.navLink}>Home</a>
                </Link>
                <Link href="/game">
                <a className={css.navLink}>Game</a>
                </Link>
                <Link href="/history">
                <a className={css.navLink}>History</a>
                </Link>
          </Toolbar>
        </AppBar>
    )
}