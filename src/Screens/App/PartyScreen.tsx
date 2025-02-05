import {Text, SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import Header from '../../Components/Header/Header';
import PartyMaterialTopNavigation from '../../Navigation/PartyMaterialTopNavigation';

const PartyScreen = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View>
        <Header />
      </View>
      <View>
        <PartyMaterialTopNavigation />
      </View>
      <Text>Party screen</Text>
    </SafeAreaView>
  );
};

export default PartyScreen;
