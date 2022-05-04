import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function DiceTheme({ themes, currentTheme, changeDiceTheme }) {
  const handleClick = (e) => {
    const selectedColor = e.target.farthestViewportElement.style.color;
    changeDiceTheme(selectedColor);
  };
  return (
    <div className="theme--container">
      <div className="theme--title">Dice Color</div>
      <div className="theme--list">
        {themes.map((theme) => (
          <FontAwesomeIcon
            icon={theme === currentTheme ? faCircleCheck : faCircle}
            key={theme}
            onClick={handleClick}
            style={{ color: theme }}
            className="fas-icon"
          ></FontAwesomeIcon>
        ))}
      </div>
    </div>
  );
}
