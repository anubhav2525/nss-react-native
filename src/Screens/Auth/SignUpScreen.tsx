import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Icon} from 'react-native-vector-icons/Icon';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../context/ThemeContext';

const SignUpScreen = () => {
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
            Create an Account
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
              placeholder="John Deo"
              className="p-4 bg-gray-50 rounded-xl text-gray-600"
              keyboardType="default"
              autoCapitalize="none"
            />
          </View>
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

          {/* Password Input */}
          <View className="flex-col flex gap-1">
            <Text className="text-[#1A1B4B] text-base mb-2 font-medium">
              Password
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

          {/* Sign Up Buttons */}
          <View className="flex flex-col gap-4 pt-4">
            <TouchableOpacity className="bg-blue-600 py-3 rounded-xl flex flex-row items-center gap-x-2 justify-center">
              <Text className="text-white text-center font-semibold text-lg">
                Sign Up
              </Text>
              {/* <Icon name="arrowright" size={20} color="white" /> */}
            </TouchableOpacity>

            <View className="flex flex-row w-full items-center gap-4">
              <TouchableOpacity className="bg-gray-50 py-3 w-full rounded-xl flex-row justify-center items-center">
                <Image
                  source={require('../../../assets/images/google.png')}
                  alt="logo"
                  className="w-7 h-7 mr-4 object-contain"
                />
                <Text className="text-[#1A1B4B] text-center font-semibold">
                  Sign up with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center mt-">
            <Text className="text-gray-600">Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text className="text-orange-400">Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
