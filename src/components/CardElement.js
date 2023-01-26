import React from "react";

export default function CardElement(props) {
  return (
    <div
      onClick={() => {
        props.handleFlip(props.card);
      }}
      id={props.card.id}
      className={`card ${props.card.flipped ? "flip" : ""}`}
    >
      <div className="front">
        <img
          className="icon"
          src={`assets/images/${props.card.icon}.jpg`}
          alt={props.card.icon}
        ></img>
      </div>
      <div className="back">
        <img
          className="icon"
          src={`assets/images/backCard.jpg`}
          alt={props.card.icon}
        ></img>
      </div>
    </div>
  );
}
