import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56 56"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M41.08 48H2a1 1 0 100 2h39.08c.488 3.387 3.401 6 6.92 6 3.859 0 7-3.14 7-7s-3.141-7-7-7c-3.519 0-6.432 2.613-6.92 6zM20.695 27H2a1 1 0 100 2h18.632c.396 3.602 3.456 6.414 7.161 6.414s6.765-2.812 7.161-6.414H54a1 1 0 100-2H34.891c-.577-3.4-3.536-6-7.098-6s-6.521 2.6-7.098 6zM8 0C4.141 0 1 3.14 1 7s3.141 7 7 7c3.519 0 6.432-2.613 6.92-6H54a1 1 0 100-2H14.92C14.432 2.613 11.519 0 8 0z" />
  </svg>
);

const SvgFilterFull = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgFilterFull;
