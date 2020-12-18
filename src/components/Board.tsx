import React from "react";
import Square from "./Square";
import css from "../../styles/Game.module.css";

export type BoardProps = {
  onClick: (position: number) => void;
  board: BoardState;
  isDisabled: boolean;
};

const Board = (props: BoardProps) => {
  return (
    <div className={css.board}>
      <div>
        <Square
          value={props.board[0]}
          onClick={props.onClick}
          position={0}
          isDisabled={props.isDisabled}
        />
        <Square
          value={props.board[1]}
          onClick={props.onClick}
          position={1}
          isDisabled={props.isDisabled}
        />
        <Square
          value={props.board[2]}
          onClick={props.onClick}
          position={2}
          isDisabled={props.isDisabled}
        />
      </div>
      <div>
        <Square
          value={props.board[3]}
          onClick={props.onClick}
          position={3}
          isDisabled={props.isDisabled}
        />
        <Square
          value={props.board[4]}
          onClick={props.onClick}
          position={4}
          isDisabled={props.isDisabled}
        />
        <Square
          value={props.board[5]}
          onClick={props.onClick}
          position={5}
          isDisabled={props.isDisabled}
        />
      </div>
      <div>
        <Square
          value={props.board[6]}
          onClick={props.onClick}
          position={6}
          isDisabled={props.isDisabled}
        />
        <Square
          value={props.board[7]}
          onClick={props.onClick}
          position={7}
          isDisabled={props.isDisabled}
        />
        <Square
          value={props.board[8]}
          onClick={props.onClick}
          position={8}
          isDisabled={props.isDisabled}
        />
      </div>
    </div>
  );
};

export default Board;
