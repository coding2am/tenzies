import React from "react";

export default function Score({ currentRollTimes, bestRollTimes }) {
  return (
    <div className="score--container">
      <p className="score--best">
        FASTEST &#128073;&#127999;
        <span className="score">
          {bestRollTimes === "0" ? "?" : bestRollTimes}
        </span>
      </p>
      <p className="score--current">
        CURRENT TIMES &#128073;&#127999;
        <span className="score">{currentRollTimes}</span>
      </p>
    </div>
  );
}
