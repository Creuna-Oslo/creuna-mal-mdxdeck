import React from "react";
import PropTypes from "prop-types";
import { MDXTag } from "@mdx-js/tag";
import IntroLight from "intro-pages/intro-light";
import IntroDark from "intro-pages/intro-dark";
import colors from "../styles/colors";

const themes = {
  dark: "dark",
  light: "light"
};

const H1 = props => (
  <h1 style={{ color: colors.creunaRed, fontSize: "4vw" }} {...props} />
);

const Intro = ({ theme, title, subTitle, presenterName }) =>
  theme === themes.dark ? (
    <IntroDark>
      <MDXTag name="wrapper">
        <MDXTag name="h1">{title}</MDXTag>
        <MDXTag name="h3">
          <div style={{ color: colors.creunaBlue }}> {subTitle}</div>
        </MDXTag>
        <MDXTag name="h4">
          <div style={{ color: colors.creunaLightYellow }}>
            Presenter: {presenterName}
          </div>
        </MDXTag>
      </MDXTag>
    </IntroDark>
  ) : theme === themes.light ? (
    <IntroLight>
      <MDXTag name="wrapper">
        <MDXTag name="h1">{title}</MDXTag>
        <MDXTag name="h3">
          <div style={{ color: colors.creunaBlue }}>{subTitle}</div>
        </MDXTag>
        <MDXTag name="h4"> Presenter: {presenterName} </MDXTag>
      </MDXTag>
    </IntroLight>
  ) : (
    <MDXTag name="wrapper">
      <MDXTag name="h1" components={{ h1: H1 }}>
        OPS!
      </MDXTag>
      <MDXTag name="p">Du må velge enten "dark" eller "light" theme :(</MDXTag>
    </MDXTag>
  );

Intro.proptypes = {
  theme: PropTypes.oneOf(Object.values(themes)),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  presenterName: PropTypes.string.isRequired
};

export default Intro;
