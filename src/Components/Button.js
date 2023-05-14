import React from "react";
import "./Styles/Button.css";

function Button({ name, onClick }) {
  return (
    <div className="buttonBody" onClick={onClick}>
      <div className="textStyle">{name}</div>
    </div>
  );
}

export default Button;
