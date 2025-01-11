import '@ui/global.css';

import {SplashScreen, Stack} from 'expo-router';
import * as React from 'react';
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
