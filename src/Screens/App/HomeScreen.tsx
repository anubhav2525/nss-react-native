import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import Header from '../../Components/Header/Header';

const HomeScreen = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView
      className={`flex-1 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View>
        <Header />
      </View>
      <ScrollView>
        <View>
          <Text>Home Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
