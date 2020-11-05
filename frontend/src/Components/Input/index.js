import React from "react";
import "./styles.scss";
const Input = ({ placeholder, type, value, handleInput }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onKeyUp={handleInput}
      className="regular-input"
    />
  );
};

export default Input;
