import React from 'react';
import {useRouter} from 'next/router';
import {AppBar,Toolbar, IconButton, Button, Typography} from '@material-ui/core';

export default function Navbar(){
  const router = useRouter();
  const handleClick = () => {
    const path = router.pathname === "/history" ? "/" : "/history";
    router.push(path);
  };
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Button color="inherit" onClick={handleClick}>{router.pathname==="/history" ? "Home" : "View History"}</Button>
          </Toolbar>
        </AppBar>
    )
}