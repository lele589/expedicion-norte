import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 55 55"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M27.5 0C12.336 0 0 12.337 0 27.5c0 7.976 3.417 15.167 8.86 20.195l-.072.098.705.604a27.48 27.48 0 0014.756 6.404 28.134 28.134 0 002.926.19c.062 0 .123.008.185.008l.052-.002.089.002C42.664 55 55 42.663 55 27.5S42.664 0 27.5 0zm16.75 46.702a7.41 7.41 0 00-2.293-1.969l-7.619-4.609a2.361 2.361 0 01-.19-.124h5.539c.434.061 2.162.229 3.67-.673a2.72 2.72 0 001.25-1.695 2.845 2.845 0 00-.327-2.151c-2.088-3.438-4.655-8.691-5.018-14.189-.143-2.147-.547-3.938-1.237-5.473-1.424-3.164-4.469-6.947-10.91-7-10.964.09-11.33 11.206-11.332 11.32-.125 6.47-4.134 12.855-5.851 15.3-.467.665-.616 1.312-.444 1.921.188.66.719 1.171 1.625 1.56 1.917.823 4.322 1.066 4.521 1.081h6.084c-.167.324-.395.735-.512.813l-9.166 3.933a7.35 7.35 0 00-1.914 1.395C5.132 41.483 2 34.852 2 27.5 2 13.439 13.439 2 27.5 2S53 13.439 53 27.5c0 7.653-3.394 14.524-8.75 19.202z" />
  </svg>
);

const SvgUserFemaleFull = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgUserFemaleFull;
