import React from "react";

export default function One({ handleClick, id, isHeld, shakeClass, theme }) {
  const held = () => {
    handleClick(id);
  };
  const styles = {
    backgroundColor: isHeld ? "rgb( 88, 214, 141)" : theme,
  };
  return (
    <div className={`dice dice--1 ${shakeClass}`} onClick={held} style={styles}>
      <span className="dot"></span>
    </div>
  );
}
