import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 3h50v2H0zM0 17h50v2H0zM0 31h50v2H0zM0 45h50v2H0z" />
  </svg>
);

const SvgMenu = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgMenu;
