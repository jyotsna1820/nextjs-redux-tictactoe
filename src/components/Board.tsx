import React from 'react';
import Square from './Square';
import css from '../../styles/Game.module.css';

export type BoardProps = {
    value : Tile;
    onClick: () => void;
  };

const Board = (props: BoardProps) => {
    return(
        <div className={css.board}>
            <div>
                <Square value={props.value}/>
                <Square value={props.value}/>
                <Square value={props.value}/>
            </div>
            <div >
                <Square value={props.value}/>
                <Square value={props.value}/>
                <Square value={props.value}/>
            </div>
            <div>
                <Square value={props.value}/>
                <Square value={props.value}/>
                <Square value={props.value}/>
            </div>
        </div>
    )
};

export default Board;