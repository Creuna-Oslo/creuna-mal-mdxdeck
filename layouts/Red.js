import React from "react";
import Colors from "../styles/colors";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: Colors.creunaRed,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
);
