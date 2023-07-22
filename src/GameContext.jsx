import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [state, setState] = useState({
    currentFishIndex: 0,
    correctCount: 0,
    incorrectCount: 0,
    answersLeft: initialFishes.map((fish) => fish.name),
    isGameOver: false,
  });

    useEffect(() => {
    if (state.correctCount + state.incorrectCount === initialFishes.length) {
      setState((prevState) => ({ ...prevState, isGameOver: true }));
    }
  }, [state.correctCount, state.incorrectCount]);

  const nextFishToName = initialFishes[state.currentFishIndex];

  const handleFormSubmit = (userGuess) => {
    const currentFish = initialFishes[state.currentFishIndex];

    if (userGuess.toLowerCase() === currentFish.name) {
      setState((prevState) => ({
        ...prevState,
        correctCount: prevState.correctCount + 1,
        answersLeft: prevState.answersLeft.filter((answer) => answer !== userGuess),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        incorrectCount: prevState.incorrectCount + 1,
        answersLeft: prevState.answersLeft.filter((answer) => answer !== currentFish.name),
      }));
    }

    if (state.currentFishIndex === initialFishes.length - 1) {
      setState((prevState) => ({
        ...prevState,
        isGameOver: true,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        currentFishIndex: prevState.currentFishIndex + 1,
      }));
    }

  };

  const contextValue = { state, nextFishToName, handleFormSubmit };

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGameContext = () => useContext(GameContext);