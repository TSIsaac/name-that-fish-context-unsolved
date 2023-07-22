import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { GameProvider } from "./GameContext"; // Make sure to import GameProvider
import "./Components/styles/final-score.css";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <header>
          <ScoreBoard />
          <GameBoard />
        </header>
        <FinalScore />
      </div>
    </GameProvider>
  );
}

export default App;



