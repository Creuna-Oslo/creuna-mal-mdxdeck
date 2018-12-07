import React from "react";
import Colors from "../styles/colors.js";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: Colors.creunaYellow,
      color: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
);
