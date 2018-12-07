import React from "react";
import colors from "../styles/colors";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: colors.creunaBlue,
      color: colors.creunaLightYellow,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
);
