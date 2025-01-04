import { Appearance } from 'react-native';

const tones = {
  mainColor: {
    light: '#E0F2F1',
    lightHover: '#B2DFDB',
    lightActive: '#80CBC4',
    normal: '#009688',
    normalHover: '#00796B',
    normalActive: '#004D40',
    dark: '#00251A',
    darkHover: '#001F16',
    darkActive: '#001711',
  },
  grey: {
    grey50: '#FAFAFA',
    grey100: '#F5F5F5',
    grey200: '#EEEEEE',
    grey300: '#E0E0E0',
    grey400: '#BDBDBD',
    grey500: '#9E9E9E',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
  },
  error: {
    light: '#FFEBEE',
    lightHover: '#FFCDD2',
    lightActive: '#EF9A9A',
    normal: '#F44336',
    normalHover: '#D32F2F',
    normalActive: '#B71C1C',
    dark: '#7F0000',
    darkHover: '#6A0000',
    darkActive: '#520000',
  },
  warning: {
    light: '#FFF8E1',
    lightHover: '#FFECB3',
    lightActive: '#FFE082',
    normal: '#FFC107',
    normalHover: '#FFA000',
    normalActive: '#FF6F00',
    dark: '#E65100',
    darkHover: '#BF360C',
    darkActive: '#8C250A',
  },
  success: {
    light: '#E8F5E9',
    lightHover: '#C8E6C9',
    lightActive: '#A5D6A7',
    normal: '#4CAF50',
    normalHover: '#388E3C',
    normalActive: '#1B5E20',
    dark: '#0B3D0B',
    darkHover: '#072B07',
    darkActive: '#051F05',
  },
};

const lightColors = {
  primary: tones.mainColor.normal,
  text: '#000000',
  background: '#FFFFFF',
  buttonText: '#FFFFFF',
  borderColor: tones.grey.grey300,
  placeholderText: tones.grey.grey400,
  secondaryText: tones.grey.grey600,
  linkColor: tones.mainColor.normalHover,
  iconColor: tones.grey.grey700,
  facebookColor: tones.grey.grey700, // Facebook blue
};

const darkColors = {
  primary: tones.mainColor.normal,
  text: '#FFFFFF',
  background: '#000000',
  buttonText: '#000000',
  borderColor: tones.grey.grey600,
  placeholderText: tones.grey.grey500,
  secondaryText: tones.grey.grey400,
  linkColor: tones.mainColor.lightHover,
  iconColor: tones.grey.grey300,
  facebookColor: tones.grey.grey300,
};

// Function to get the current theme colors
export const getColors = () => {
  const colorScheme = Appearance.getColorScheme(); // Get the current theme (light or dark)
  return colorScheme === 'dark' ? darkColors : lightColors;
};
