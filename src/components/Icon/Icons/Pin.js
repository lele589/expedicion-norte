import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M30 26c3.86 0 7-3.141 7-7s-3.14-7-7-7-7 3.141-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5z" />
    <path d="M29.823 54.757L45.164 32.6c5.754-7.671 4.922-20.28-1.781-26.982C39.761 1.995 34.945 0 29.823 0s-9.938 1.995-13.56 5.617c-6.703 6.702-7.535 19.311-1.804 26.952l15.364 22.188zM17.677 7.031C20.922 3.787 25.235 2 29.823 2s8.901 1.787 12.146 5.031c6.05 6.049 6.795 17.437 1.573 24.399L29.823 51.243 16.082 31.4c-5.2-6.932-4.454-18.32 1.595-24.369z" />
    <path d="M42.117 43.007a1 1 0 00-.234 1.986C52.399 46.231 58 49.567 58 51.5c0 2.714-10.652 6.5-28 6.5S2 54.214 2 51.5c0-1.933 5.601-5.269 16.117-6.507a1 1 0 00-.234-1.986C7.354 44.247 0 47.739 0 51.5 0 55.724 10.305 60 30 60s30-4.276 30-8.5c0-3.761-7.354-7.253-17.883-8.493z" />
  </svg>
);

const SvgPin = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgPin;
