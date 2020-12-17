import React, { useState } from "react";
import { useRouter } from "next/router";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setPlayers } from "../store/actionCreators";
import { TextField } from "@material-ui/core";
import css from "../../styles/Game.module.css";

const Players = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setPlayers(playerX, playerO));
      router.push("/game");
    },
    [dispatch, setPlayers, playerX, playerO]
  );

  const handlePlayerX = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerX(e.target.value);
  };
  const handlePlayerO = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerO(e.target.value);
  };

  const isDisabled = (): boolean => {
    if (playerO.length > 4 && playerX.length > 4) {
      return false;
    }
    return true;
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={css.form}
      onSubmit={handleSubmit}
    >
      <div className={css.formFields}>
        <TextField
          id="playerX"
          value={playerX}
          onChange={handlePlayerX}
          label="Enter Name for PlayerX"
          variant="outlined"
          helperText="5 characters or more"
          required
        />
        <TextField
          id="playerO"
          value={playerO}
          onChange={handlePlayerO}
          label="Enter Name for PlayerO"
          helperText = "5 characters or more"
          variant="outlined"
          required
        />
      </div>
      <button type="submit" className={css.button} disabled={isDisabled()}>
        Start Tournament
      </button>
    </form>
  );
};

export default Players;
