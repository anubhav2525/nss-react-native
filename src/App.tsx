import '../global.css';
import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppStackNavigation } from './Navigation/AppStackNavigation';
import { AppTabNavigation } from './Navigation/AppTabNavigation';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const { theme } = useTheme(); // Get theme from context

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {loggedIn ? <AppTabNavigation /> : <AppStackNavigation />}
    </NavigationContainer>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
