import React from "react";

export default function DiceTheme({ themes, currentTheme, changeDiceTheme }) {
  const handleClick = (e) => {
    changeDiceTheme(e.target.style.color);
  };
  return (
    <div className="theme--container">
      <div className="theme--title">Dice Color</div>
      <div className="theme--list">
        {themes.map((theme) => (
          <i
            key={theme}
            onClick={handleClick}
            style={{ color: theme }}
            className={`fa-solid  ${
              theme === currentTheme ? "fa-circle-check" : "fa-circle"
            }`}
          ></i>
        ))}
      </div>
    </div>
  );
}
