import '@gaio/ui/global.css';

import {SplashScreen, Stack} from 'expo-router';
import * as React from 'react';
import {PortalHost} from '@rn-primitives/portal';
import {ThemeToggle} from '@gaio/ui/components/ThemeToggle';
import {Toaster} from '@gaio/ui/components/custom/sonner';
import UIProvider from '@gaio/ui/components/UIProvider';
import {verifyInstallation} from 'nativewind';

// Fix change theme slow, because of appstate checking on mobile
import {Appearance} from 'react-native';
import {systemColorScheme} from 'react-native-css-interop/dist/runtime/native/appearance-observables';

// FIXME: https://github.com/nativewind/nativewind/issues/1332
Appearance.addChangeListener(({colorScheme}) =>
  systemColorScheme.set(colorScheme ?? 'light'),
);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  verifyInstallation();

  return (
    <UIProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Starter Base',
            // headerShown: false,
            headerRight: () => <ThemeToggle />,
          }}
        />
      </Stack>
    </UIProvider>
  );
}
