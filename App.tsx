/**
 * React Native Boilerplate - Navigation, i18n, NativeWind, theme.
 * @format
 */
import 'react-native-gesture-handler';
import './global.css';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { ThemeProvider } from './src/contexts/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n';

LogBox.ignoreLogs([
  'SafeAreaView has been deprecated',
]);

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
