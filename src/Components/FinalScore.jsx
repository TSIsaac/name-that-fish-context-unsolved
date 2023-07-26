import React from "react";
import { useGameContext } from "../GameContext";
import "./styles/final-score.css";


// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correctCount, totalCount} = useGameContext();


  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};




