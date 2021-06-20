import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54.971 54.971"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M51.173 3.801c-5.068-5.068-13.315-5.066-18.384 0l-9.192 9.192a2 2 0 102.828 2.828l9.192-9.192a8.938 8.938 0 016.363-2.622c2.413 0 4.673.932 6.364 2.623s2.623 3.951 2.623 6.364a8.934 8.934 0 01-2.623 6.363L36.325 31.379c-3.51 3.508-9.219 3.508-12.729 0a2 2 0 10-2.828 2.828c2.534 2.534 5.863 3.801 9.192 3.801s6.658-1.267 9.192-3.801l12.021-12.021c2.447-2.446 3.795-5.711 3.795-9.192 0-3.482-1.348-6.746-3.795-9.193z" />
    <path d="M27.132 40.57l-7.778 7.778a8.935 8.935 0 01-6.364 2.623 8.937 8.937 0 01-6.364-2.623c-3.509-3.509-3.509-9.219 0-12.728L17.94 24.306a8.938 8.938 0 016.364-2.622c2.412 0 4.672.932 6.363 2.622a2 2 0 102.828-2.828c-5.067-5.067-13.314-5.068-18.384 0L3.797 32.793C1.351 35.239.003 38.504.003 41.985c0 3.48 1.348 6.745 3.795 9.191a12.905 12.905 0 009.191 3.795c3.481 0 6.746-1.348 9.192-3.795l7.778-7.778a2 2 0 00-2.827-2.828z" />
  </svg>
);

const SvgLinkBold = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgLinkBold;
