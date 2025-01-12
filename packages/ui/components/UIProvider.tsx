import '@ui/global.css';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme,
  DefaultTheme,
  type Theme,
  ThemeProvider,
} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Platform} from 'react-native';
import {themes} from '@ui/lib/constants';
import {useColorScheme} from '@ui/lib/useColorScheme';
import {PortalHost} from '@rn-primitives/portal';
import {setAndroidNavigationBar} from '@ui/lib/android-navigation-bar';
import {Toaster} from '@ui/components/custom/sonner';
import {SplashScreen} from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function UIProvider({children}: {children: React.ReactNode}) {
  const {colorScheme, setColorScheme, isDarkColorScheme} = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
        setAndroidNavigationBar(colorTheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      setAndroidNavigationBar(colorTheme);
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  const color = 'Zinc';
  const themeMode = isDarkColorScheme ? 'dark' : 'light';

  const themeValue: Theme = isDarkColorScheme
    ? {
        ...DarkTheme,
        colors: themes[color][themeMode],
      }
    : {
        ...DefaultTheme,
        colors: themes[color][themeMode],
      };

  if (Platform.OS === 'web') {
    for (const key in themeValue.colors) {
      const newKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      console.log('key:', key);
      document.documentElement.style.setProperty(
        `--${newKey}`,
        themeValue.colors[key],
      );
    }
  }
  console.log('themeColor: ', themeValue);

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={themeValue}>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        {children}
        <PortalHost />
        <Toaster />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
