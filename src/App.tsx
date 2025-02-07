import '../global.css';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {AppStackNavigation} from './Navigation/AppStackNavigation';
import {AppTabNavigation} from './Navigation/AppTabNavigation';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppContent: React.FC = () => {
  const {theme} = useTheme();

  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppStackNavigation />
        {/* <AppTabNavigation /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
