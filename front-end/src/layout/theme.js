export const fontSizes = [12, 14, 16, 18, 20];

export const space = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const colors = {
  vyBlue: '#003A70',
  vyGreen: '#00866E',
  vyMint: '#CCEAE4',
  vyGray: '#F5F5F5',
  vyBlack: '#333333',
  vyLightBlue: '#A7BCD6',
  vyOrange: '#FF3800',
};

export const radii = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const fontWeights = {
  regular: 500,
  medium: 600,
  bold: 700,
};

export const breakpoints = ['576px', '768px', '992px', '1200px'];

export const mediaQueries = {
  small: `(max-width: ${breakpoints[0]})`,
  medium: `(max-width: ${breakpoints[1]})`,
  large: `(max-width: ${breakpoints[2]})`,
  xLarge: `(max-width: ${breakpoints[3]})`,
};

const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  radii,
  breakpoints,
  mediaQueries,
};

export default theme;
