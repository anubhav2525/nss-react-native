import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

const MoreScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default MoreScreen;
