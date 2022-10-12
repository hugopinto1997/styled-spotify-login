export interface ThemeData {
  palette: {
    common: {
      facebookBlue: string;
      black: string;
      white: string;
      red: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
}

export const theme: ThemeData = {
  palette: {
    common: {
      facebookBlue: '#3b5998',
      black: '#000000',
      white: '#ffffff',
      red: '#ba2010',
      primary: '#18ac4d',
      secondary: '#e8e6e3',
      tertiary: '#a59d92',
    },
  },
};

export default theme;
