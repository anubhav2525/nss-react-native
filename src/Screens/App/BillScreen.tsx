import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';

const BillScreen = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
    </SafeAreaView>
  );
};

export default BillScreen;
