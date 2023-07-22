import "./styles/score-board.css";
import React from "react";
import { useGameContext } from "../GameContext";
//  Where the score is presented


// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { state } = useGameContext();

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {state.incorrectCount}</div>
      <div id="choices-left">
        {state.answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {state.correctCount}</div>
    </div>
  );
};
