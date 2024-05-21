import type { SaturatedColor, ThemeData } from '@/@types/themeData';
import { DARK_THEME, LIGHT_THEME } from '@/consts';

const cyan: SaturatedColor = {
  sat50: '#EDFDFD',
  sat100: '#C4F1F9',
  sat200: '#9DECF9',
  sat300: '#76E4F7',
  sat400: '#0BC5EA',
  sat500: '#00B5D8',
  sat600: '#00A3C4',
  sat700: '#0987A0',
  sat800: '#086F83',
  sat900: '#065666',
};

const gray: SaturatedColor = {
  sat50: '#f7fafc',
  sat100: '#EDF2F7',
  sat200: '#E2E8F0',
  sat300: '#CBD5E0',
  sat400: '#A0AEC0',
  sat500: '#718096',
  sat600: '#4A5568',
  sat700: '#2D3748',
  sat800: '#29292E',
  sat900: '#171923',
};

const red: SaturatedColor = {
  sat50: '#FFF5F5',
  sat100: '#FED7D7',
  sat200: '#FEB2B2',
  sat300: '#FC8181',
  sat400: '#F56565',
  sat500: '#E53E3E',
  sat600: '#C53030',
  sat700: '#9B2C2C',
  sat800: '#822727',
  sat900: '#63171B',
};

const orange: SaturatedColor = {
  sat50: '#FFFAF0',
  sat100: '#FEEBC8',
  sat200: '#FBD38D',
  sat300: '#F6AD55',
  sat400: '#ED8936',
  sat500: '#DD6B20',
  sat600: '#C05621',
  sat700: '#9C4221',
  sat800: '#7B341E',
  sat900: '#652B19',
};

const blue: SaturatedColor = {
  sat50: '#EBF8FF',
  sat100: '#BEE3F8',
  sat200: '#90CDF4',
  sat300: '#63B3ED',
  sat400: '#4299E1',
  sat500: '#3182CE',
  sat600: '#2B6CB0',
  sat700: '#2C5282',
  sat800: '#2A4365',
  sat900: '#1A365D',
};

const purple: SaturatedColor = {
  sat50: '#FAF5FF',
  sat100: '#E9D8FD',
  sat200: '#D6BCFA',
  sat300: '#B794F4',
  sat400: '#9F7AEA',
  sat500: '#805AD5',
  sat600: '#6B46C1',
  sat700: '#553C9A',
  sat800: '#44337A',
  sat900: '#322659',
};

const pink: SaturatedColor = {
  sat50: '#FFF5F7',
  sat100: '#FED7E2',
  sat200: '#FBB6CE',
  sat300: '#F687B3',
  sat400: '#ED64A6',
  sat500: '#D53F8C',
  sat600: '#B83280',
  sat700: '#97266D',
  sat800: '#702459',
  sat900: '#521B41',
};

const green: SaturatedColor = {
  sat50: '#F0FFF4',
  sat100: '#C6F6D5',
  sat200: '#9AE6B4',
  sat300: '#68D391',
  sat400: '#48BB78',
  sat500: '#38A169',
  sat600: '#2F855A',
  sat700: '#276749',
  sat800: '#22543D',
  sat900: '#1C4532',
};
const yellow: SaturatedColor = {
  sat50: '#FFFFF0',
  sat100: '#FEFCBF',
  sat200: '#FAF089',
  sat300: '#F6E05E',
  sat400: '#ECC94B',
  sat500: '#D69E2E',
  sat600: '#B7791F',
  sat700: '#975A16',
  sat800: '#744210',
  sat900: '#5F370E',
};
const teal: SaturatedColor = {
  sat50: '#E6FFFA',
  sat100: '#B2F5EA',
  sat200: '#81E6D9',
  sat300: '#4FD1C5',
  sat400: '#38B2AC',
  sat500: '#319795',
  sat600: '#2C7A7B',
  sat700: '#285E61',
  sat800: '#234E52',
  sat900: '#1D4044',
};

export const light: ThemeData = {
  name: LIGHT_THEME,
  colors: {
    background: '#f8f8f8',
    black: '#000000',
    white: '#FFFFFF',
    textColor: '#242423',
    red,
    blue,
    cyan,
    pink,
    gray,
    teal,
    green,
    purple,
    orange,
    yellow,
  },
};

export const dark: ThemeData = {
  name: DARK_THEME,
  colors: {
    background: '#242423',
    black: '#000000',
    white: '#FFFFFF',
    textColor: '#BFBFBF',
    red,
    blue,
    cyan,
    pink,
    gray,
    teal,
    green,
    purple,
    orange,
    yellow,
  },
};
