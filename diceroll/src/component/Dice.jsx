import { useState, useEffect } from "react";
import Dice1 from "./Dice1";
import Dice2 from "./Dice2";

export default function Dice() {
  const [gameState, setGameState] = useState({
    player1Number: 0,
    player2Number: 0,
    message: "",
  });

  const min = 1;
  const max = 101; // Exclusive upper bound

  useEffect(() => {
    const player1Number = getRandomNumber(min, max);
    const player2Number = getRandomNumber(min, max);
    const message = determineWinner(player1Number, player2Number);

    setGameState({ player1Number, player2Number, message });
  }, [min, max]); // Add dependencies

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function determineWinner(num1, num2) {
    if (num1 > num2) return "Player 1 wins";
    if (num1 < num2) return "Player 2 wins";
    return "Draw";
  }

  return (
    <div className="dice_number">
      <div>{gameState.message}</div>
      <Dice1 number={gameState.player1Number} />
      <Dice2 number={gameState.player2Number} />
    </div>
  );
}
