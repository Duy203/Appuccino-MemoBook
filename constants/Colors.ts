/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#cba6f7'; // lavender
const tintColorDark = '#cba6f7';

export const Colors = {
  light: {
    text: '#3b2f2f',             // deep brown
    background: '#f3efe0',       // parchment
    tint: tintColorLight,
    icon: '#a678f2',             // lavender accents
    tabIconDefault: '#a678f2',
    tabIconSelected: tintColorLight,
    card: '#f4f0ff',
    accent: '#c7a9ff',
  },
  dark: {
    text: '#f3efe0',             // parchment-like text
    background: '#2d2230',       // magical plum
    tint: tintColorDark,
    icon: '#d5b4ff',             // lavender
    tabIconDefault: '#a678f2',
    tabIconSelected: tintColorDark,
    card: '#2c2630',
    accent: '#8b65d6',
  },
};

