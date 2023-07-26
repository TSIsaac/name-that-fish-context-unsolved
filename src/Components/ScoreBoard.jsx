import "./styles/score-board.css";
import React from "react";
import { useGameContext } from "../GameContext";
//  Where the score is presented


// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { correctCount, incorrectCount, answersLeft } = useGameContext();

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
