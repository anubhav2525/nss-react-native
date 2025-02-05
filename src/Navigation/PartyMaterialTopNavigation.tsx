import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomerScreen from '../Screens/App/Party/CustomerScreen';
import SupplierScreen from '../Screens/App/Party/SupplierScreen';
import {useTheme} from '../context/ThemeContext';

const Tab = createMaterialTopTabNavigator();

const PartyMaterialTopNavigation = () => {
  const {theme} = useTheme(); // Get theme context

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#121212' : '#ffffff', // Dark or light mode
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'capitalize',
          color: theme === 'dark' ? '#ffffff' : '#000000', // Adjust text color
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme === 'dark' ? '#bb86fc' : '#6200ee', // Indicator color
          height: 3, // Indicator thickness
        },
      }}>
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Suppliers" component={SupplierScreen} />
    </Tab.Navigator>
  );
};

export default PartyMaterialTopNavigation;
