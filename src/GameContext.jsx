import React, { createContext, useContext, useState} from "react";
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
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  


  const totalCount = correctCount + incorrectCount;
  const isGameOver = totalCount === initialFishes.length;
  const nextFishToName = initialFishes[totalCount];
  const currentIndex = totalCount;

  const answersLeft = initialFishes.slice(currentIndex).map((fish) => fish.name);

  const handleFormSubmit = (userGuess) => {
    if (userGuess.toLowerCase() === nextFishToName.name) {
      setCorrectCount(correctCount + 1)
      
    } else {
      setIncorrectCount(incorrectCount + 1)
      
    }


  };

  const contextValue = { 
    isGameOver,
    answersLeft, 
    correctCount, 
    incorrectCount, 
    totalCount, 
    nextFishToName, 
    handleFormSubmit };

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGameContext = () => useContext(GameContext);