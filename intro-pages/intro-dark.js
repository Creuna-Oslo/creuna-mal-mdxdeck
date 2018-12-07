import React from "react";

export default ({ children }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vw",
        backgroundColor: "black",
        color: "white",
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
        src="assets/creuna-logo-hvit.svg"
      />
      {children}
    </div>
  );
};
