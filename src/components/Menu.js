import React from "react";

export default function Menu(props) {
  return (
    <div id="menu">
      <button id="menuRestart" onClick={props.restart}>
        Reiniciar
      </button>
    </div>
  );
}
