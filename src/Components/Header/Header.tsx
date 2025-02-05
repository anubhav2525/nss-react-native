import {View, Text, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View className="px-4 py-2 flex flex-row items-center justify-start gap-2">
      <Image
        source={require('../../../assets/images/logo.png')}
        className="w-8 h-8 md:h-10 md:w-10 rounded-full object-cover"
        height={20}
        width={20}
        alt="logo"
      />
      <Text className="text-xl font-bold">New Singh Sahi</Text>
    </View>
  );
};

export default Header;
