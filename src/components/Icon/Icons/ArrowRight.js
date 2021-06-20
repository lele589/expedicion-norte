import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 59.414 59.414"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M15.561 0l-1.415 1.414 28.293 28.293L14.146 58l1.415 1.414 29.707-29.707z" />
  </svg>
);

const SvgArrowRight = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgArrowRight;
