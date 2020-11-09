import React from "react";
import "./styles.scss";

const TableContainer = ({ children }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table>{children}</table>;
    </div>
  );
};

export default TableContainer;
