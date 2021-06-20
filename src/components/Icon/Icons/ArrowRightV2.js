import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49.656 49.656"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M14.535 0l-4.242 4.242 20.585 20.586-20.585 20.586 4.242 4.242 24.829-24.828L14.535 0zm-1.414 45.414l20.585-20.586L13.121 4.242l1.414-1.414 22 22-22 22-1.414-1.414z" />
  </svg>
);

const SvgArrowRightV2 = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgArrowRightV2;
