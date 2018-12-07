import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: "white",
      color: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <img
      style={{
        width: "30vw",
        marginRight: "5rem"
      }}
      src="assets/creuna-logo.svg"
    />

    {children}
  </div>
);
