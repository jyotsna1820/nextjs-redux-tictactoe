import React from "react";
import css from '../../styles/Tile.module.css';
import {Button} from '@material-ui/core';

export type SquareProps = {
    value: Tile;
    // onClick: () => void;
  };

const Square = (props: SquareProps) => {
  console.log(props.value);
    const style = props.value ? `squares ${props.value}` : `squares`;
    return (
      <Button variant="contained" className={css.squares}>
        {props.value}
      </Button>
    );
  }

export default Square;