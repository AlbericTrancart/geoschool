import { css } from "styled-components";

export const getSpacing = (spacing: number) => `${spacing / 2}rem`;

export const breakpoints = {
  sm: "48rem",
  md: "64rem",
  lg: "80rem",
};

export const colors = {
  // 7 shades of grey
  black: "black",
  darkerGrey: "#333333",
  darkGrey: "#494949",
  grey: "#a9a9a9",
  lightGrey: "#cccccc",
  lighterGrey: "#f6f6f6",
  white: "white",

  red: "#eb4d5c",
  green: "#5cb85c",
  yellow: "#f0ad4e",
  blue: "#337ab7",
  darkBlue: "#213242",
};

export const fonts = {
  main: "'Lato', 'Helvetica Neue', Helvetica, sans-serif",
};

export const typography = {
  main: css`
    /* stylelint-disable */
    font-family: ${fonts.main};
    font-size: 1rem;
  `,
  huge: css`
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.25;
  `,
  bigger: css`
    font-size: 1.75rem;
    line-height: 1.5;
  `,
  big: css`
    font-size: 1.25rem;
    line-height: 1.5;
  `,
  small: css`
    font-size: 0.75rem;
    line-height: 1.5;
  `,
};

export const borderRadius = "5px";
