import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import Header from '../../Components/Header/Header';

const HomeScreen = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView className="bg-white dark:bg-black flex-1">
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View>
        <Header />
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
