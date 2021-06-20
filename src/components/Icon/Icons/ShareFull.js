import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 59 59"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M47 39a9.934 9.934 0 00-7.071 2.929c-.524.524-.975 1.1-1.365 1.709l-17.28-10.489A9.93 9.93 0 0022 29.456a9.949 9.949 0 00-.715-3.693l17.284-10.409C40.345 18.142 43.456 20 47 20c5.514 0 10-4.486 10-10S52.514 0 47 0 37 4.486 37 10a9.94 9.94 0 00.667 3.562L20.361 23.985c-1.788-2.724-4.866-4.529-8.361-4.529-5.514 0-10 4.486-10 10s4.486 10 10 10c3.495 0 6.572-1.805 8.36-4.529L37.664 45.43A9.987 9.987 0 0037 49a9.932 9.932 0 002.929 7.071C41.818 57.96 44.329 59 47 59s5.182-1.04 7.071-2.929C55.96 54.183 57 51.671 57 49s-1.04-5.183-2.929-7.071A9.934 9.934 0 0047 39z" />
  </svg>
);

const SvgShareFull = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgShareFull;
