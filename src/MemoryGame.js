import React, { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import game from "./game/game";
import GameBoard from "./components/GameBoard";

export default function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCards());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCards());
    setGameOver(false);
  }

  function handleFlip(card) {
    if (game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
          if (game.checkGameOver()) {
            setGameOver(true);
          }
        } else {
          setTimeout(() => {
            game.unflipCards();
            setCards([...game.cards]);
          }, 1000);
        }
      }
    }
    setCards([...game.cards]);
  }
  return (
    <>
      <div>
        <GameBoard handleFlip={handleFlip} cards={cards} />
      </div>
      <GameOver show={gameOver} handleRestart={restart} />
    </>
  );
}
