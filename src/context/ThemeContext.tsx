import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define Theme Types
type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: 'light' | 'dark';
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

// Create Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider Props Type
interface ThemeProviderProps {
  children: ReactNode;
}

// Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme(); // Get system theme (light/dark)
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto'); // Default to system
  const [theme, setTheme] = useState<'light' | 'dark'>(systemColorScheme || 'light');

  // Load user preference from AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('themeMode');
      if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'auto') {
        setThemeMode(savedTheme);
      }
    };
    loadTheme();
  }, []);

  // Update theme based on mode
  useEffect(() => {
    if (themeMode === 'auto') {
      setTheme(systemColorScheme || 'light');
    } else {
      setTheme(themeMode);
    }
  }, [themeMode, systemColorScheme]);

  // Toggle between light and dark (does not affect 'auto' mode)
  const toggleTheme = () => {
    setThemeMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      AsyncStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  // Manually set theme mode
  const changeThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    AsyncStorage.setItem('themeMode', mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme, setThemeMode: changeThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
