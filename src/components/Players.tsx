import React, { useState } from "react";
import { useRouter } from "next/router";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setPlayers } from "../store/actionCreators";
import css from "../../styles/Game.module.scss";
import formStyle from "../../styles/Form.module.scss";

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
    if (playerO.length > 2 && playerX.length > 2) {
      return false;
    }
    return true;
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={formStyle.form}
      onSubmit={handleSubmit}
    >
      <div className={formStyle.formFields}>
        <div>
        <label htmlFor="playerX" className={formStyle.form__label}>Enter Name for PlayerX</label>
        <input
          id="playerX"
          className={formStyle.form__input}
          value={playerX}
          onChange={handlePlayerX}
          required
          placeholder="3 characters or more"
        />
        </div>
        <div>
        <label htmlFor="playerX" className={formStyle.form__label}>Enter Name for PlayerO</label>
        <input
          id="playerO"
          value={playerO}
          className={formStyle.form__input}
          onChange={handlePlayerO}
          required
          placeholder="3 characters or more"
        />
        </div>
      </div>
      <button type="submit" className={css.button} disabled={isDisabled()}>
        Start Tournament
      </button>
    </form>
  );
};

export default Players;
