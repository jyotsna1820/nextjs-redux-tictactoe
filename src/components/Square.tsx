import React from "react";
import css from "../../styles/Tile.module.scss";

export type SquareProps = {
  value: Tile;
  onClick: (position: number) => void;
  position: number;
  isDisabled: boolean;
};

const Square = (props: SquareProps) => {
  const disableIfFilled = props.value ? true : false;
  return (
    <button
      className={css.tile + (props.value ? ` ${css[props.value]}` : '')}
      onClick={() => props.onClick(props.position)}
      disabled={props.isDisabled || disableIfFilled}
    >
      {props.value}
    </button>
  );
};

export default Square;
