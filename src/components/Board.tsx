import React from 'react';
import Square from './Square';
import css from '../../styles/Game.module.css';

const Board = () => {
    return(
        <div className={css.board}>
            <div>
                <Square value={"X"}/>
                <Square value={"X"}/>
                <Square value={"X"}/>
            </div>
            <div >
                <Square value={"O"}/>
                <Square value={"O"}/>
                <Square value={"X"}/>
            </div>
            <div>
                <Square value={"X"}/>
                <Square value={"X"}/>
                <Square value={"X"}/>
            </div>
        </div>
    )
};

export default Board;