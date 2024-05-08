export type ThemeData = {
  name: string;
  colors: {[k: string]: SaturatedColor | string}
};

export type SaturatedColor = {
  sat50: string,
  sat100: string,
  sat200: string,
  sat300: string,
  sat400: string,
  sat500: string,
  sat600: string,
  sat700: string,
  sat800: string,
  sat900: string,
};
