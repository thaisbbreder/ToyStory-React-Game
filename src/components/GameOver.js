import React, { Fragment } from "react";

export default function GameOver(props) {
  return props.show ? (
    <div id="gameOver">
      <div>Você conseguiu!!</div>
      <button id="restart" onclick={props.handleRestart}>
        Jogue novamente
      </button>
    </div>
  ) : (
    <Fragment></Fragment>
  );
}
