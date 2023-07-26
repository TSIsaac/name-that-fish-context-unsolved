import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { useGameContext } from "./GameContext";

function App() {
  const { isGameOver } = useGameContext();
  return (
    <div className="App">
      <header>
        <ScoreBoard />
        {!isGameOver 
          ? <GameBoard /> 
          : <FinalScore />}
      </header>
    </div>
  );
}

export default App;
