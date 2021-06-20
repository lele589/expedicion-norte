import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M295.999 281.376c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z" />
    <path d="M385.22 335.218c-9.374-9.369-32.107-34.727-50.041-75.851-13.336-31.998-44.347-52.669-79.028-52.669-34.674 0-65.68 20.674-79.019 52.679-22.5 51.606-53.238 78.916-53.533 79.174l-.106.094c-18.13 16.233-28.528 39.487-28.528 63.799 0 29.721 14.153 55.568 38.705 71.945 22.876 15.262 51.229 19.838 77.784 12.557 13.308-3.646 28.711-5.574 44.547-5.574 16.103 0 31.734 1.992 45.203 5.76a94.262 94.262 0 0077.421-12.172c24.834-16.409 39.232-42.5 39.232-72.516 0-26.399-11.886-50.864-32.637-67.226zm-17.623 123.055c-18.023 11.908-40.258 15.406-61.005 9.599-15.201-4.253-32.695-6.5-50.594-6.5-17.596 0-34.827 2.174-49.834 6.286-20.966 5.749-43.344 2.138-61.398-9.906-18.85-12.575-29.804-32.234-29.804-55.309 0-18.614 7.956-36.421 21.829-48.863 2.134-1.871 34.586-30.925 58.706-86.29l.066-.156c10.208-24.564 33.988-40.436 60.584-40.436 26.606-.001 50.391 15.868 60.596 40.426l.066.156c19.586 44.95 44.804 72.7 54.736 82.546.286.282.588.548.904.794 16.146 12.545 25.405 31.434 25.405 51.823.002 23.267-11.13 43.193-30.257 55.83z" />
    <path d="M323.24 321.186c-3.014-4.627-9.208-5.938-13.837-2.923-4.629 3.016-5.937 9.211-2.923 13.838 15.217 23.363 29.645 38.923 36.893 46.119 3.918 3.89 10.25 3.869 14.143-.051 3.891-3.919 3.868-10.251-.051-14.143-6.684-6.636-20.018-21.025-34.225-42.84zM223.59 157.945c9.609-16.795 13.615-39.102 10.991-61.195-5.076-43.013-34.741-79.046-67.884-75.066-14.966 1.771-28.272 11.595-37.473 27.662-9.603 16.782-13.609 39.089-10.991 61.198 8.291 70.245 73.684 102.728 105.357 47.401zm-77.008-98.664c5.474-9.563 14.013-17.879 25.02-17.879 19.681 0 39.427 26.419 43.119 57.699 2.13 17.933-.964 35.76-8.488 48.91-23.047 40.264-62.693 6.318-68.139-39.815-2.125-17.947.97-35.776 8.488-48.915zM127.802 265.5c2.895-17.823-.623-37.534-9.905-55.503-9.286-17.973-23.328-32.25-39.541-40.202-17.219-8.446-34.853-8.882-49.653-1.229-14.8 7.647-24.642 22.28-27.716 41.207-2.895 17.824.623 37.534 9.905 55.505 9.287 17.968 23.329 32.242 39.542 40.194 16.09 7.892 33.916 9.367 49.65 1.238 14.802-7.647 24.646-22.283 27.718-41.21zm-36.897 23.441c-9.03 4.668-20.274 4.161-31.663-1.425-12.39-6.077-23.25-17.237-30.581-31.42-7.327-14.185-10.145-29.496-7.933-43.117 2.033-12.518 8.127-21.979 17.158-26.645l.003-.002c9.986-5.163 21.552-3.539 31.66 1.419 12.389 6.077 23.249 17.238 30.58 31.426 7.327 14.185 10.145 29.498 7.933 43.118-2.032 12.518-8.126 21.98-17.157 26.646zM330.998 186.089c30.315 0 57.988-33.098 62.999-75.353 5.325-45.014-17.355-89.143-53.38-89.143-30.32 0-57.99 33.099-62.989 75.353-5.331 45.096 17.416 89.143 53.37 89.143zM297.49 99.295c3.702-31.278 23.452-57.703 43.129-57.703.926 0 1.724.045 2.439.138 10.663 1.185 18.917 10.504 23.779 20.019 6.614 12.941 9.274 29.939 7.3 46.634-3.843 32.404-25.321 60.197-45.577 57.568l-.111-.014c-9.093-1.07-17.718-8.36-23.662-20-6.612-12.942-9.271-29.942-7.297-46.642zM511.013 209.813c-6.324-38.946-41.53-57.564-77.369-39.978-33.529 16.448-55.437 58.818-49.446 95.706 6.399 39.407 41.956 57.344 77.368 39.972 33.539-16.451 55.437-58.816 49.447-95.7zm-58.255 77.743c-11.388 5.585-22.632 6.09-31.663 1.425v.001c-9.031-4.667-15.125-14.131-17.157-26.647-4.572-28.156 12.838-61.947 38.514-74.546 23.53-11.543 44.613-.675 48.82 25.229 4.564 28.104-12.791 61.922-38.514 74.538z" />
  </svg>
);

const SvgPaw = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgPaw;