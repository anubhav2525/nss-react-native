import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/App/HomeScreen';
import BillScreen from '../Screens/App/BillScreen';
import InventoryScreen from '../Screens/App/InventoryScreen';
import MoreScreen from '../Screens/App/MoreScreen';
import PartyScreen from '../Screens/App/PartyScreen';

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bill" component={BillScreen} />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Parties" component={PartyScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export {AppTabNavigation};
