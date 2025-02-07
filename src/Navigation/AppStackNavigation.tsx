import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../Screens/Auth/SignInScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import ForgetScreen from '../Screens/Auth/ForgetScreen';
import ResetPasswordScreen from '../Screens/Auth/ResetPasswordScreen';
import AddItemScreen from '../Screens/App/Inventory/AddItemScreen';
import EditItemScreen from '../Screens/App/Inventory/EditItemScreen';
import InventoryItemDetailScreen from '../Screens/App/Inventory/InventoryItemDetailScreen';
import AddNewCustomer from '../Screens/App/Party/AddNewCustomer';
import AddNewSupplier from '../Screens/App/Party/AddNewSupplier';
import CustomerDetailScreen from '../Screens/App/Party/CustomerDetailScreen';
import SupplierDetailScreen from '../Screens/App/Party/SupplierDetailScreen';
import SupplierEditScreen from '../Screens/App/Party/SupplierEditScreen';
import CustomerEditScreen from '../Screens/App/Party/CustomerEditScreen';
import {useTheme} from '../context/ThemeContext';
import OnboardingScreen from '../Screens/Public/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../Screens/App/HomeScreen';
import {AppTabNavigation} from './AppTabNavigation';

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  const {theme} = useTheme();
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const checkFirstTime = async () => {
      const firstTime = await AsyncStorage.getItem('isFirstTime');
      const userToken = await AsyncStorage.getItem('userToken'); // Assuming userToken is stored on login

      if (firstTime === null) {
        setIsFirstTime(true);
      } else {
        setIsFirstTime(false);
        // setIsLoggedIn(!!userToken);
        setIsLoggedIn(true);
      }
    };

    checkFirstTime();
  }, []);

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem('isFirstTime', 'false');
    setIsFirstTime(false);
  };

  if (isFirstTime === null) return null; // Prevent flickering during loading

  const OnBoardingComp = () => {
    return (
      <OnboardingScreen handleOnboardingComplete={handleOnboardingComplete} />
    );
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isFirstTime && (
        <Stack.Screen name="Onboarding" component={OnBoardingComp} />
      )}
      {!isLoggedIn && (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Forget" component={ForgetScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </>
      )}
      <Stack.Screen name="Tab" component={AppTabNavigation} />
      <Stack.Screen
        name="AddItem"
        component={AddItemScreen}
        options={{
          headerShown: true,
          title: 'Add Item',
        }}
      />
      <Stack.Screen
        name="EditItem"
        component={EditItemScreen}
        options={{
          headerShown: true,
          title: 'Edit Item',
        }}
      />
      <Stack.Screen
        name="InventoryItemDetail"
        component={InventoryItemDetailScreen}
        options={{
          headerShown: true,
          title: 'Item Detail',
        }}
      />
      <Stack.Screen
        name="AddNewCustomer"
        component={AddNewCustomer}
        options={{headerShown: true, title: 'Add New Customer'}}
      />
      <Stack.Screen
        name="AddNewSupplier"
        component={AddNewSupplier}
        options={{headerShown: true, title: 'Add New Supplier'}}
      />
      <Stack.Screen
        name="CustomerDetail"
        component={CustomerDetailScreen}
        options={{headerShown: true, title: 'Customer Detail'}}
      />
      <Stack.Screen
        name="SupplierDetail"
        component={SupplierDetailScreen}
        options={{headerShown: true, title: 'Supplier Detail'}}
      />
      <Stack.Screen
        name="SupplierEdit"
        component={SupplierEditScreen}
        options={{headerShown: true, title: 'Edit Supplier'}}
      />
      <Stack.Screen
        name="CustomerEdit"
        component={CustomerEditScreen}
        options={{headerShown: true, title: 'Edit Customer'}}
      />
    </Stack.Navigator>
  );
};

export {AppStackNavigation};
