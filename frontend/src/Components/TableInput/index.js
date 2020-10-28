import React from "react";
import "./styles.scss";

const TableInput = ({
  type,
  value,
  name,
  placeholder,
  handleChange,
  defaultValue,
  ...addtionalData
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default TableInput;
