import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';

const InventoryScreen = () => {
  const {theme} = useTheme();
  return (
    <View>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Text>InventoryScreen</Text>
    </View>
  );
};

export default InventoryScreen;
