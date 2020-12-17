import React from 'react';
import {AppBar,Toolbar, IconButton, Button, Typography} from '@material-ui/core';

export default function Navbar(){
    return (
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
    </IconButton>
    <Button href="/history" color="inherit">View History</Button>
  </Toolbar>
</AppBar>
    )
}