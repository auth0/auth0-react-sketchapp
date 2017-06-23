import processColor from './processColor';
import type { Color } from './processColor';

export const colors = {
  Base: '#333333',
  Red: '#EB5424',
  Blue: '#16214D',
  'Light Blue': '#44C7F4',
  Yellow: '#EACA2C',
  Orange: '#FF9A57',
  Green: '#01B48F',
  Gray: '#D0D2D3',
  Pink: '#C879B2',
  'BG Dark': '#222228',
  'BG Oil': '#5C666F',
  'BG Gray': '#E3E5E7',
  'BG Light': '#F5F7F9',
  'Status Success': '#7ED321',
  'Status Error': '#FF3E00'
};

const typeSizes = [80, 48, 36, 24, 20, 16, 14];

export const spacing = 16;

export const fontFamilies = {
  display: 'Fakt Pro',
  body: 'Fakt Pro',
};

const fontWeights = {
  regular: 'normal',
  bold: '500',
};

export const fonts = {
  Headline: {
    color: colors.Base,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Base,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Title 2': {
    color: colors.Base,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Base,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  Body: {
    color: colors.Base,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
  SC: {
    color: colors.Base,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    letterSpacing: 1,
    lineHeight: 20
  },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};
