// app/_layout.tsx (or RootLayout.tsx if you're using that name)
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from '../contexts/UserContexts'; // ✅ corrected path

import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { UserProvider } from './contexts/UserContext'; // Make sure path matches

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
<<<<<<< HEAD
    <UserProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='login'>
=======
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack initialRouteName="login">
>>>>>>> origin/main
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
<<<<<<< HEAD
      </ThemeProvider>
    </UserProvider>
=======
      </UserProvider>
    </ThemeProvider>
>>>>>>> origin/main
  );
}
