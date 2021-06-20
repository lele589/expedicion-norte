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
    <path d="M51.062 21.841a30.62 30.62 0 00-6.99-5.235l9.549-9.549a.999.999 0 10-1.414-1.414l-10.021 10.02a30.386 30.386 0 00-12.685-2.753c-8.145 0-15.802 3.171-21.561 8.931L0 29.781l8.138 8.138a30.62 30.62 0 006.714 5.078l-9.145 9.145a.999.999 0 101.414 1.414l9.593-9.593a30.39 30.39 0 0012.984 2.886c8.145 0 15.802-3.171 21.561-8.931l7.941-7.941-8.138-8.136zM16.321 41.529a28.59 28.59 0 01-6.769-5.024l-6.724-6.724 6.527-6.527c5.381-5.381 12.536-8.345 20.146-8.345 3.903 0 7.683.784 11.169 2.27l-24.349 24.35zm33.524-5.024c-5.381 5.381-12.536 8.345-20.146 8.345-4.015 0-7.9-.833-11.468-2.402l24.361-24.361a28.55 28.55 0 017.056 5.168l6.724 6.724-6.527 6.526z" />
    <path d="M29.572 16.85c-7.168 0-13 5.832-13 13 0 2.543.745 4.91 2.012 6.916l17.904-17.904a12.907 12.907 0 00-6.916-2.012zM22.459 40.718a12.92 12.92 0 007.113 2.131c7.168 0 13-5.832 13-13a12.92 12.92 0 00-2.131-7.113L22.459 40.718z" />
  </svg>
);

const SvgEyeCrossedFull = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgEyeCrossedFull;
