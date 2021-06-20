import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32.526 32.526"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M32.526 2.828L29.698 0 16.263 13.435 2.828 0 0 2.828l13.435 13.435L0 29.698l2.828 2.828 13.435-13.435 13.435 13.435 2.828-2.828-13.435-13.435z" />
  </svg>
);

const SvgCrossBold = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgCrossBold;
