import React from "react";
import PropTypes from "prop-types";
import { Image } from "mdx-deck";
import { MDXTag } from "@mdx-js/tag";
import colors from "../styles/colors";

const ImageWithBoxes = ({ backgroundImg, boxLabelTop, boxLabelBottom }) => (
  <Image src={backgroundImg}>
    <div className="test" style={{ padding: "2vh 2vh 0vh 2vh" }}>
      <div
        className="box"
        style={{
          color: "white",
          width: "48vh",
          height: "48vh",
          backgroundColor: colors.creunaBlue
        }}
      >
        <MDXTag name="h4">
          <p style={{ padding: "2.5vw", margin: "0" }}>{boxLabelTop}</p>
        </MDXTag>
      </div>
    </div>

    <div className="test" style={{ padding: "0vh 2vh 2vh 2vh" }}>
      <div
        className="box"
        style={{
          color: colors.creunaBlue,
          width: "48vh",
          height: "48vh",
          backgroundColor: "black"
        }}
      >
        <MDXTag name="h4">
          <p style={{ padding: "2.5vw", margin: "0" }}>{boxLabelBottom}</p>
        </MDXTag>
      </div>
    </div>
  </Image>
);
ImageWithBoxes.proptypes = {
  backgroundImg: PropTypes.string,
  boxLabelTop: PropTypes.string,
  boxLabelBottom: PropTypes.string
};

export default ImageWithBoxes;
