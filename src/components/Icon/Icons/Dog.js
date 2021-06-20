import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 479.997 479.997"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M303.882 387.949c-27.451 9.424-46.143-9.094-53.929-19.218a10.009 10.009 0 00-.323-3.751c24.072-4.618 41.152-24.895 41.152-50.742 0-5.522-4.477-10-10-10H197.3c-5.523 0-10 4.478-10 10 0 25.542 16.693 45.634 40.329 50.563a10.01 10.01 0 00-.387 3.861c-2.649 3.418-6.557 7.825-11.601 11.791-12.939 10.173-27.175 12.695-42.316 7.496-5.224-1.793-10.912.988-12.706 6.211-1.793 5.223.987 10.911 6.21 12.705 7.28 2.5 14.501 3.742 21.58 3.742 13.984 0 27.405-4.85 39.592-14.432 4.137-3.252 7.675-6.711 10.598-9.949 2.923 3.238 6.462 6.697 10.599 9.949 12.189 9.582 25.609 14.432 39.596 14.432 7.078 0 14.302-1.243 21.582-3.742 5.224-1.793 8.004-7.482 6.211-12.705-1.793-5.223-7.479-8.004-12.705-6.211zm-64.825-41.975c-15.142.001-26.586-8.557-30.391-21.736h60.752c-3.801 13.179-15.234 21.736-30.361 21.736z" />
    <path d="M478.38 363.171c-1.693-72.82-10.413-132.147-25.919-176.353-12.458-35.516-29.325-61.5-50.131-77.233-25.665-19.407-49.427-17.151-56.3-15.953a149.671 149.671 0 00-41.207-31.518l4.372-9.478a10.001 10.001 0 00-10.807-14.038l-50.581 8.866 3.397-6.79a9.998 9.998 0 00-13.485-13.383l-71.33 36.37c-.194.1-.385.205-.573.316l-9.584 5.705c-.13.077-.258.157-.384.24a150.064 150.064 0 00-27.342 23.082c-10.284-.661-29.928.768-50.837 16.579-20.806 15.733-37.673 41.719-50.131 77.233C12.031 231.024 3.31 290.352 1.619 363.172 1.242 365.717.05 374.513.002 384.339c-.086 17.718 3.523 29.321 11.034 35.475 2.385 1.953 6.695 4.514 12.9 4.514 2.808 0 6.004-.524 9.584-1.866 21.319-8.008 37.861-51.678 40.96-60.351a10.03 10.03 0 00.512-2.168l1.535-12.722c8.471 21.211 21.348 40.695 38.185 57.338 32.125 31.752 74.601 49.238 119.605 49.238 44.99 0 87.445-17.487 119.543-49.241 21.798-21.564 36.957-47.899 44.487-76.587l6.796 32.805c.094.454.219.9.375 1.337 3.099 8.673 19.641 52.343 40.966 60.354 3.578 1.341 6.771 1.864 9.577 1.864 6.204 0 10.516-2.561 12.901-4.515 7.511-6.153 11.12-17.757 11.034-35.475-.046-9.827-1.238-18.624-1.616-21.168zM64.801 277.418l-9.529 78.998c-7.509 20.554-20.476 44.201-28.778 47.319-1.585.595-2.424.621-2.679.621-.055 0-.082-.002-.084.002-.151-.127-3.669-3.391-3.73-19.012-.04-10.166 1.458-19.615 1.472-19.703.073-.453.115-.912.126-1.371 3.545-156.517 38.651-215.941 67.476-238.231 8.327-6.439 16.229-9.839 22.887-11.57-13.998 22.184-21.703 47.848-21.703 74.451v3.012c-20.448 26.629-24.838 57.535-25.458 85.484zm319.01 4.447l-.003 3.653c0 81.761-67.061 148.278-149.491 148.278-82.491 0-149.603-66.518-149.603-148.278 0-2.213.021-4.455.065-6.715l4.377-36.29c.083-.69.093-1.372.038-2.039 3.343-13.607 9.072-26.879 18.791-38.704a10.006 10.006 0 002.274-6.35v-6.499c0-40.651 21.081-78.829 56.401-102.171l9.104-5.419 44.434-22.657a9.998 9.998 0 001.765 8.041 9.995 9.995 0 009.746 3.876l51.329-8.998-2.523 5.472a10.001 10.001 0 0014.587 12.538c42.343 21.748 68.642 63.624 68.642 109.319v17.505c0 2.476.918 4.863 2.577 6.7 6.542 7.247 10.639 14.964 13.208 23.161.014.596.074 1.197.199 1.801l3.173 15.317c.936 8.98.924 18.461.91 28.459zm72.535 122.46c-.008.003-.814.171-2.835-.587-8.362-3.141-21.443-27.074-28.928-47.716l-21.95-105.945c-1.863-16.388-6.645-32.49-18.891-47.363v-13.792c0-26.627-7.732-52.715-22.362-75.442-.068-.105-.141-.208-.209-.313 7.705.928 18.328 4.039 29.753 12.874 28.825 22.291 63.93 81.716 67.476 238.232.011.459.053.918.126 1.372.015.092 1.49 9.321 1.473 19.478-.028 16.045-3.685 19.202-3.653 19.202z" />
    <path d="M166.583 227.972c12.199.371 24.029 7.659 35.162 21.663a9.982 9.982 0 007.834 3.777c2.181 0 4.377-.71 6.217-2.172 4.323-3.438 5.042-9.729 1.605-14.051-15.021-18.895-31.982-28.724-50.41-29.214-28.87-.784-49.68 22.314-50.55 23.296-3.652 4.124-3.27 10.409.84 14.077 4.11 3.667 10.424 3.308 14.107-.788.153-.171 15.671-17.143 35.195-16.588zM299.595 207.976c-28.902-.789-49.672 22.315-50.543 23.297-3.662 4.135-3.278 10.455.856 14.116 4.136 3.662 10.456 3.278 14.116-.856.151-.171 15.676-17.096 35.04-16.563 12.245.324 24.118 7.614 35.292 21.667a9.977 9.977 0 007.833 3.776c2.181 0 4.378-.71 6.217-2.173 4.323-3.436 5.041-9.727 1.604-14.051-15.023-18.896-31.987-28.724-50.415-29.213z" />
  </svg>
);

const SvgDog = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  fill: ${(props) => (props.color ? props.color : "#666")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgDog;
