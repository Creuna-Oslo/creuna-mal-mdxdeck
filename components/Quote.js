import React from "react";
import PropTypes from "prop-types";
import Dark from "../layouts/Dark";
import Light from "../layouts/Light";
import Red from "../layouts/Red.js";
import Blue from "../layouts/Blue.js";
import Yellow from "../layouts/Yellow.js";
import Colors from "../styles/colors.js";
import { MDXTag } from "@mdx-js/tag";

const themes = {
  red: "red",
  blue: "blue",
  yellow: "yellow",
  dark: "dark",
  light: "light"
};

const Quote = ({ theme, text }) =>
  theme === themes.red ? (
    <Red>
      <MDXTag name="h1">«{text}»</MDXTag>
    </Red>
  ) : theme === themes.blue ? (
    <Blue>
      <MDXTag name="h1">«{text}»</MDXTag>
    </Blue>
  ) : theme === themes.yellow ? (
    <Yellow>
      <MDXTag name="h1">«{text}»</MDXTag>
    </Yellow>
  ) : theme === themes.dark ? (
    <Dark>
      <MDXTag name="h1">
        <div style={{ color: Colors.creunaLightYellow }}>«{text}»</div>
      </MDXTag>
    </Dark>
  ) : theme === themes.light ? (
    <Light>
      <MDXTag name="h1">«{text}»</MDXTag>
    </Light>
  ) : (
    <MDXTag name="wrapper">
      <MDXTag name="h3">
        <div style={{ color: Colors.creunaRed }}>OPS!</div>
      </MDXTag>
      <MDXTag name="p">Du kan kun velge følgene themes:</MDXTag>
      <MDXTag name="li">"dark"</MDXTag>
      <MDXTag name="li">"light</MDXTag>
      <MDXTag name="li">"red"</MDXTag>
      <MDXTag name="li">"blue"</MDXTag>
      <MDXTag name="li">"yellow"</MDXTag>
    </MDXTag>
  );
Quote.proptypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.values(themes))
};

export default Quote;
