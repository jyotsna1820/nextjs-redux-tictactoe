import React from "react";
import { useRouter } from "next/router";
import css from "../../styles/Game.module.scss";
import { Typography } from "@material-ui/core";

type propTypes = {
  winner: string;
  score: any;
};

const Winner = (props: propTypes) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className={css.winner}>
      <Typography variant="h2">
        {props.winner === "T" ? `Its a Tie!` : `${props.winner} wins`}
      </Typography>
      {props.winner === "T" ? (
        <iframe
          src="https://giphy.com/embed/d4aVubYhzgqwtG48"
          width="480"
          height="270"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          src="https://giphy.com/embed/MEWeqM3BehSDLdghe2"
          width="429"
          height="480"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <button className={css.button} onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};

export default Winner;
