import React from "react";

export default function Six({ handleClick, id, isHeld, shakeClass, theme }) {
  const held = () => {
    handleClick(id);
  };
  const styles = {
    backgroundColor: isHeld ? "rgb( 88, 214, 141)" : theme,
  };
  return (
    <div className={`dice dice--6 ${shakeClass}`} onClick={held} style={styles}>
      <div className="divider">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="divider">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
