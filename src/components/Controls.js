import React from "react";
import Score from "./Score";
import DiceTheme from "./DiceTheme";

export default function Controls({
  rollDice,
  startGame,
  rollTimes,
  bestRollTimes,
  themes,
  currentTheme,
  changeDiceTheme,
}) {
  return (
    <div className="control--container">
      <Score currentRollTimes={rollTimes} bestRollTimes={bestRollTimes} />
      <button className="roll--btn" onClick={rollDice}>
        {startGame ? "Start Game" : "Roll"}
      </button>
      <DiceTheme
        themes={themes}
        currentTheme={currentTheme}
        changeDiceTheme={changeDiceTheme}
      />
    </div>
  );
}
