import BaseStyles from './BaseStyles';
import CustomStyles from './CustomStyles';
export { default as GlobalStyle } from './GlobalStyle';

const fontSizes = [10, 12, 14, 15, 16, 18, 20, 24, 28, 36, 48, 60, 96];
fontSizes.xs = fontSizes[1];
fontSizes.sm = fontSizes[2];
fontSizes.md = fontSizes[4];

const fontWeights = {
  exLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const breakpoints = [576, 768, 992, 1200].map(b => `${b}px`);
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const Theme = {
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 512],
  fontSizes,
  fontWeights,
  lineHeights: {
    normal: 1.42,
    solid: 1,
    title: 1.25,
    copy: 1.5,
    loose: 1.75,
    doubled: 2,
    veryloose: 2.25,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    sans: `'Noto Sans', 'Sarabun', sans-serif`,
    serif: `'Noto Sans', sans-serif`,
    mitr: `'Mitr', sans-serif`,
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  colors: {
    primary: '#50B2E0',
    secondary: '#1B8FD3',
    tertiary: '#426CB1',
    greyscale: {
      grey1: '#3E3E3E',
      grey2: '#4A4A4A',
      grey3: '#E4E4E4',
      grey4: '#EAEAEA',
      grey5: '#F8F8F8',
    },
    white: '#FFFFFF',
    black: '#000000',
    success: '#48B6A3',
    inprogress: '#72C3C0',
    info: '#1976d2',
    warning: '#FFCC00',
    danger: '#D44244',
    yellowOnWhite: '#EDA31D',
    disabled: '#E4E4E4',
    distrinctList: [
      '#e6194b',
      '#3cb44b',
      '#ffe119',
      '#4363db',
      '#f58231',
      '#42d4f4',
      '#f032e6',
      '#fabed4',
      '#469990',
      '#dcbeff',
      '#9A6324',
      '#fffac8',
      '#800000',
      '#aaffc3',
      '#000075',
      '#a9a9a9',
    ],
  },
  zIndices: {
    mobileStepper: 1000,
    navBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  textStyles: {
    h1: { fontSize: fontSizes[10] },
    h2: { fontSize: fontSizes[9] },
    h3: { fontSize: fontSizes[8] },
    h4: { fontSize: fontSizes[7] },
    h5: { fontSize: fontSizes[6] },
    h6: { fontSize: fontSizes[5] },
    subtitle1: { fontSize: fontSizes[4] },
    subtitle2: { fontSize: fontSizes[3] },
    body1: { fontSize: fontSizes[2] },
    body2: { fontSize: fontSizes[1] },
    caption: { fontSize: fontSizes[0] },
    extraLarge: { fontSize: fontSizes[8], fontWeight: fontWeights.bold },
    large: { fontSize: fontSizes[6], fontWeight: fontWeights.semibold },
    normal: { fontSize: fontSizes[4], fontWeight: fontWeights.normal },
    small: { fontSize: fontSizes[2], fontWeight: fontWeights.light },
    extraSmall: { fontSize: fontSizes[0], fontWeight: fontWeights.exLight },
  },
  ...CustomStyles,
  ...BaseStyles,
};

export default Theme;
