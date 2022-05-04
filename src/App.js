import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import Controls from "./components/Controls";
import Info from "./components/Info";
import { nanoid } from "nanoid";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

function App() {
  /* functions  */
  const generateSingleDie = (dummyDice) => {
    let result;
    result = {
      id: nanoid(),
      value: dummyDice ? 6 : Math.ceil(Math.random() * 6),
      isHeld: false,
    };

    return result;
  };
  const generateTenDice = (isSample) => {
    const dice = [];
    for (let i = 1; i <= 10; i++) {
      dice.push(generateSingleDie(isSample ? true : false));
    }
    return dice;
  };
  const rollDice = () => {
    /* adding roll time */
    setRollTimes((prevRollTime) => ({
      ...prevRollTime,
      currentRollTimes: prevRollTime.currentRollTimes + 1,
    }));

    /* checking started of the game  */
    if (!gameStatus.startGame) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateSingleDie();
        })
      );
    } else {
      setDice(generateTenDice(false));
    }
    /* setting game status */
    setGameStatus({
      tenzies: false,
      startGame: false,
      shakeDice: true,
    });
    /* removing shake animation */
    setTimeout(() => {
      document.querySelectorAll(".dice").forEach((die) => {
        die.classList.remove("shake");
      });
    }, 600);
  };
  const holdDice = (id) => {
    /* disable holding feature when game is not started yet */
    if (!gameStatus.startGame) {
      setDice((preDice) =>
        preDice.map((die) => {
          return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
        })
      );
    }
    return;
  };
  const saveScore = (champion) => {
    champion && localStorage.setItem("bestRolls", rollTimes.currentRollTimes);
    const result = champion
      ? {
          bestRollTimes: rollTimes.currentRollTimes,
          currentRollTimes: 0,
        }
      : (prevRollTime) => ({
          ...prevRollTime,
          currentRollTimes: 0,
        });
    setRollTimes(result);
  };
  const changeDiceTheme = (theme) => {
    setDiceTheme((prevTheme) => ({ ...prevTheme, currentTheme: theme }));
  };

  /* state */
  const [dice, setDice] = useState(generateTenDice(true));
  const [rollTimes, setRollTimes] = useState({
    currentRollTimes: 0,
    bestRollTimes: localStorage.getItem("bestRolls")
      ? localStorage.getItem("bestRolls")
      : 0,
  });
  const [gameStatus, setGameStatus] = useState({
    tenzies: false,
    startGame: true,
    shakeDice: false,
  });
  /* warning themes are only allow RGB value */
  const [diceTheme, setDiceTheme] = useState({
    themes: [
      "rgb(231, 76, 60)",
      "rgb(33, 47, 61)",
      "rgb(41, 128, 185)",
      "rgb(212, 172, 13)",
    ],
    currentTheme: "rgb(231, 76, 60)",
  });

  /* Effect */
  useEffect(() => {
    const value = dice[0].value;
    if (dice.every((die) => die.isHeld && die.value === value)) {
      setGameStatus((preStatus) => ({
        ...preStatus,
        tenzies: true,
        startGame: true,
      }));
      let winningMsg;
      if (rollTimes.bestRollTimes === "0") {
        /* There is no best score */
        saveScore(true);
        winningMsg = `Tenzies! You win in ${rollTimes.currentRollTimes} times.`;
      } else {
        /* Already had a best score */
        if (rollTimes.currentRollTimes <= rollTimes.bestRollTimes) {
          /* New best record */
          saveScore(true);
          winningMsg = `Tenzies! You win in ${rollTimes.currentRollTimes} times. (Fastest)`;
        } else {
          /* Just a normal win */
          saveScore(false);
          winningMsg = `Tenzies! You win in ${rollTimes.currentRollTimes} times.`;
        }
      }
      /* winning message */

      Swal.fire({
        position: "center",
        icon: "success",
        title: winningMsg,
        showConfirmButton: false,
        timer: 7000,
      });

      /* re-closing winning animation */
      setTimeout(() => {
        setGameStatus((prevStatus) => ({ ...prevStatus, tenzies: false }));
      }, 7000);
    }
  }, [dice]);

  return (
    <div className="app--container">
      {gameStatus.tenzies && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <main>
        <Info />
        <div className="dice--container">
          {dice.map((die) => (
            <Die
              key={die.id}
              id={die.id}
              holdDice={holdDice}
              num={die.value}
              isHeld={die.isHeld}
              shakeDice={gameStatus.shakeDice}
              theme={diceTheme.currentTheme}
            />
          ))}
        </div>
        <Controls
          rollDice={rollDice}
          startGame={gameStatus.startGame}
          rollTimes={rollTimes.currentRollTimes}
          bestRollTimes={rollTimes.bestRollTimes}
          themes={diceTheme.themes}
          currentTheme={diceTheme.currentTheme}
          changeDiceTheme={changeDiceTheme}
        />
      </main>
    </div>
  );
}

export default App;
