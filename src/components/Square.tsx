import React from "react";
import css from '../../styles/Tile.module.css';
import {Button} from '@material-ui/core';

export type SquareProps = {
    value: Tile;
    onClick: (position:number) => void;
    position: number;
    isDisabled: boolean;
  };

const Square = (props: SquareProps) => {
  const disableIfFilled = props.value? true : false;

  console.log(props.value);
    return (
      <Button variant="contained" className={css.squares} onClick={()=>props.onClick(props.position)} disabled={props.isDisabled || disableIfFilled}>
        {props.value}
      </Button>
    );
  }

export default Square;