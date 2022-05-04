import React from "react";
import One from "./Dice/One";
import Two from "./Dice/Two";
import Three from "./Dice/Three";
import Four from "./Dice/Four";
import Five from "./Dice/Five";
import Six from "./Dice/Six";

export default function Die({ id, num, holdDice, isHeld, shakeDice, theme }) {
  /* animate class */
  const shakeClass = shakeDice ? "shake" : "";
  /* function */
  const handleClick = () => {
    holdDice(id);
  };
  let dieElement;
  if (num === 1) {
    /* Die One */
    dieElement = (
      <One
        handleClick={handleClick}
        id={id}
        isHeld={isHeld}
        shakeClass={shakeClass}
        theme={theme}
      />
    );
  } else if (num === 2) {
    /* Die Two */
    dieElement = (
      <Two
        handleClick={handleClick}
        id={id}
        isHeld={isHeld}
        shakeClass={shakeClass}
        theme={theme}
      />
    );
  } else if (num === 3) {
    /* Die Three */
    dieElement = (
      <Three
        handleClick={handleClick}
        id={id}
        isHeld={isHeld}
        shakeClass={shakeClass}
        theme={theme}
      />
    );
  } else if (num === 4) {
    /* Die Four */
    dieElement = (
      <Four
        handleClick={handleClick}
        id={id}
        isHeld={isHeld}
        shakeClass={shakeClass}
        theme={theme}
      />
    );
  } else if (num === 5) {
    /* Die Five */
    dieElement = (
      <Five
        handleClick={handleClick}
        id={id}
        isHeld={isHeld}
        shakeClass={shakeClass}
        theme={theme}
      />
    );
  } else if (num === 6) {
    /* Die Six */
    dieElement = (
      <Six
        handleClick={handleClick}
        id={id}
        isHeld={isHeld}
        shakeClass={shakeClass}
        theme={theme}
      />
    );
  }

  return dieElement;
}
