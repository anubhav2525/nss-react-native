import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Icon} from 'react-native-vector-icons/Icon';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../context/ThemeContext';

const ForgetScreen = () => {
  const navigation = useNavigation();
  const {theme} = useTheme();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <View className="flex-1 px-6 justify-center">
        {/* Header Section */}
        <View className="mb-12">
          <Text className="text-[32px] font-semibold text-[#1A1B4B] text-center">
            Forget Password
          </Text>
          <Text className="text-gray-500 text-lg text-center mt-4 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
        </View>

        {/* Form Section */}
        <View className="flex flex-col gap-4">
          {/* Email Input */}
          <View className="flex flex-col gap-1">
            <Text className="text-[#1A1B4B] text-base mb-2 font-medium">
              Email
            </Text>
            <TextInput
              placeholder="Brandonelouis@gmail.com"
              className="p-4 bg-gray-50 rounded-xl text-gray-600"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Login Buttons */}
          <View className="flex flex-col gap-4 pt-4">
            <TouchableOpacity
              className="bg-blue-600 py-3 rounded-xl flex flex-row items-center gap-x-2 justify-center"
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text className="text-white text-center font-semibold text-lg">
                Find Account
              </Text>
              {/* <Icon name="arrowright" size={20} color="white" /> */}
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center mt-">
            <Text className="text-gray-600">Try again to? </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text className="text-orange-400">Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetScreen;
