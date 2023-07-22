import React from "react";
import { useGameContext } from "../GameContext";
import "./styles/final-score.css";


// ! Do Not Add Props Here
export const FinalScore = () => {
  const { state } = useGameContext();

  // Only display the final score after the game is over
  if (!state.isGameOver) {
    return null;
  } 

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{state.correctCount}</p>
        <hr />
        <p>{state.correctCount + state.incorrectCount}</p>
      </div>
    </div>
  );
};




