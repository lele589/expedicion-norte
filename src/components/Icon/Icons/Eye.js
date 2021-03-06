import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 59.2 59.2"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M51.062 21.561c-11.889-11.889-31.232-11.889-43.121 0L0 29.501l8.138 8.138c5.944 5.944 13.752 8.917 21.561 8.917s15.616-2.972 21.561-8.917l7.941-7.941-8.139-8.137zm-1.217 14.664c-11.109 11.108-29.184 11.108-40.293 0l-6.724-6.724 6.527-6.527c11.109-11.108 29.184-11.108 40.293 0l6.724 6.724-6.527 6.527z" />
    <path d="M28.572 21.57c-3.86 0-7 3.14-7 7a1 1 0 002 0c0-2.757 2.243-5 5-5a1 1 0 000-2z" />
    <path d="M29.572 16.57c-7.168 0-13 5.832-13 13s5.832 13 13 13 13-5.832 13-13-5.831-13-13-13zm0 24c-6.065 0-11-4.935-11-11s4.935-11 11-11 11 4.935 11 11-4.934 11-11 11z" />
  </svg>
);

const SvgEye = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgEye;
