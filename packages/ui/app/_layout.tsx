import '@ui/global.css';

import {DarkTheme, DefaultTheme, type Theme} from '@react-navigation/native';
import {SplashScreen, Stack} from 'expo-router';
import * as React from 'react';
import {NAV_THEME} from '@ui/lib/constants';
import {PortalHost} from '@rn-primitives/portal';
import {ThemeToggle} from '@ui/components/ThemeToggle';
import {Toaster} from '@ui/components/custom/sonner';
import UIProvider from '@ui/components/UIProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const {colorScheme, setColorScheme, isDarkColorScheme} = useColorScheme();
  // const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  // // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  // React.useEffect(() => {
  //   (async () => {
  //     const theme = await AsyncStorage.getItem('theme');
  //     if (Platform.OS === 'web') {
  //       // Adds the background color to the html element to prevent white background on overscroll.
  //       document.documentElement.classList.add('bg-background');
  //     }
  //     if (!theme) {
  //       AsyncStorage.setItem('theme', colorScheme);
  //       setIsColorSchemeLoaded(true);
  //       return;
  //     }
  //     const colorTheme = theme === 'dark' ? 'dark' : 'light';
  //     if (colorTheme !== colorScheme) {
  //       setColorScheme(colorTheme);
  //       setAndroidNavigationBar(colorTheme);
  //       setIsColorSchemeLoaded(true);
  //       return;
  //     }
  //     setAndroidNavigationBar(colorTheme);
  //     setIsColorSchemeLoaded(true);
  //   })().finally(() => {
  //     SplashScreen.hideAsync();
  //   });
  // }, []);

  // if (!isColorSchemeLoaded) {
  //   return null;
  // }

  return (
    <UIProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Starter Base',
            headerRight: () => <ThemeToggle />,
          }}
        />
      </Stack>
      <PortalHost />
      <Toaster />
    </UIProvider>
  );
}
