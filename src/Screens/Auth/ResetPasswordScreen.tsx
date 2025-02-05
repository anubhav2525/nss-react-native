import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Icon} from 'react-native-vector-icons/Icon';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../context/ThemeContext';
const ResetPasswordScreen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
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
            Update Password
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
              One Time Password
            </Text>
            <TextInput
              placeholder="123456"
              className="p-4 bg-gray-50 rounded-xl text-gray-600"
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>

          {/* Password Input */}
          <View className="flex-col flex gap-1">
            <Text className="text-[#1A1B4B] text-base mb-2 font-medium">
              New Password
            </Text>
            <View className="relative">
              <TextInput
                secureTextEntry={!showPassword}
                placeholder="***********"
                className="p-4 bg-gray-50 rounded-xl text-gray-600 pr-12"
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}>
                {/* {showPassword ? (
                  <Icon name="eye" size={24} color="#666" />
                ) : (
                  <Icon name="eye-with-line" size={24} color="#666" />
                )} */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Password Input */}
          <View className="flex-col flex gap-1">
            <Text className="text-[#1A1B4B] text-base mb-2 font-medium">
              Re-type New Password
            </Text>
            <View className="relative">
              <TextInput
                secureTextEntry={!showPassword}
                placeholder="***********"
                className="p-4 bg-gray-50 rounded-xl text-gray-600 pr-12"
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}>
                {/* {showPassword ? (
                  <Icon name="eye" size={24} color="#666" />
                ) : (
                  <Icon name="eye-with-line" size={24} color="#666" />
                )} */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Buttons */}
          <View className="flex flex-col gap-4 pt-4">
            <TouchableOpacity
              className="bg-blue-600 py-3 rounded-xl flex flex-row items-center gap-x-2 justify-center"
              onPress={() => navigation.navigate('Home')}>
              <Text className="text-white text-center font-semibold text-lg">
                Change Password
              </Text>
              {/* <Icon name="check" size={20} color="white" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
