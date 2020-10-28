import React from "react";
import "./styles.scss";

const TableInput = ({ type, value, placeholder, handleChange, defaultValue, ...addtionalData }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default TableInput;
