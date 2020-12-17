import React from 'react';
import {useRouter} from 'next/router';
import css from '../../styles/Game.module.css';
import {Typography} from '@material-ui/core';

type propTypes = {
    winner: string;
    score: number;
}

const Winner = (props: propTypes) => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }
    return (
        <div>
            <Typography variant="h2" >
                {props.winner === "Tie" ? `Its a Tie!` : `${props.winner} wins`} with {props.score} points.
            </Typography>
            <button className={css.button} onClick={handleClick}>Go Back</button>
        </div>
    )
}

export default Winner;