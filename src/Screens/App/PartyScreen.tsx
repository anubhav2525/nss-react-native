import {Text, SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import Header from '../../Components/Header/Header';
import PartyMaterialTopNavigation from '../../Navigation/PartyMaterialTopNavigation';

const PartyScreen = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView className={`flex-1 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View>
        <Header />
      </View>
      <View className="flex-1">
        <PartyMaterialTopNavigation />
      </View>
    </SafeAreaView>
  );
};

export default PartyScreen;
