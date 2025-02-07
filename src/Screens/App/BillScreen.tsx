import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
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
      <ScrollView>
        <View>
          <Text>Bill Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BillScreen;
