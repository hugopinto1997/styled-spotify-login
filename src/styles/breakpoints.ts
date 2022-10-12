type Devices<Type> = {
  [Property in keyof Type]: string;
};

// 1em = 16px;
export const screenSizes = {
  phoneSmall: '20em',
  phoneMedium: '23.35em',
  phoneLarge: '31.25em',
  tabletPortrait: '48em',
  tabletLandscape: '64em',
  laptop: '75em',
  desktop: '90em',
  desktopLarge: '160em',
};

export const devices: Devices<typeof screenSizes> = {
  phoneSmall: `(max-width: ${screenSizes.phoneSmall})`,
  phoneMedium: `(max-width: ${screenSizes.phoneMedium})`,
  phoneLarge: `only screen and  (max-width: ${screenSizes.phoneLarge})`,
  tabletPortrait: `only screen and  (max-width: ${screenSizes.tabletPortrait})`,
  tabletLandscape: `only screen and  (max-width: ${screenSizes.tabletLandscape})`,
  laptop: `only screen and  (max-width: ${screenSizes.laptop})`,
  desktop: `only screen and  (max-width: ${screenSizes.desktop})`,
  desktopLarge: `only screen and  (min-width: ${screenSizes.desktopLarge})`,
};
