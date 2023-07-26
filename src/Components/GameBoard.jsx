import "./styles/game-board.css";
import React, { useState } from "react";
import { useGameContext } from "../GameContext";



// ! Do not add props to gameboard
export const GameBoard = () => {

  const { nextFishToName, handleFormSubmit } = useGameContext();
  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(userGuess);
    setUserGuess("");
  };


  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
