import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faFileInvoice,
  faBoxes,
  faUsers,
  faBars,
  
} from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../Screens/App/HomeScreen';
import BillScreen from '../Screens/App/BillScreen';
import InventoryScreen from '../Screens/App/InventoryScreen';
import PartyScreen from '../Screens/App/PartyScreen';
import MoreScreen from '../Screens/App/MoreScreen';
import {useTheme} from '../context/ThemeContext';

// Type for Animated Wrapper Props
interface AnimatedScreenWrapperProps {
  children: ReactNode;
}

const Tab = createBottomTabNavigator();

// Custom Animated Screen Wrapper
const AnimatedScreenWrapper: React.FC<AnimatedScreenWrapperProps> = ({
  children,
}) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: interpolate(progress.value, [0, 1], [0, -100])}],
  }));

  return (
    <Animated.View style={[{flex: 1}, animatedStyle]}>{children}</Animated.View>
  );
};

const AppTabNavigation: React.FC = () => {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarIcon: ({color, size}) => {
          let icon;
          if (route.name === 'Home') icon = faHome;
          else if (route.name === 'Bill') icon = faFileInvoice;
          else if (route.name === 'Inventory') icon = faBoxes;
          else if (route.name === 'Parties') icon = faUsers;
          else icon = faBars;

          return <FontAwesomeIcon icon={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === 'dark' ? '#ffcc00' : '#007bff',
        tabBarInactiveTintColor: '#808080',
      })}>
      <Tab.Screen name="Home">
        {() => (
          <AnimatedScreenWrapper>
            <HomeScreen />
          </AnimatedScreenWrapper>
        )}
      </Tab.Screen>

      <Tab.Screen name="Bill">
        {() => (
          <AnimatedScreenWrapper>
            <BillScreen />
          </AnimatedScreenWrapper>
        )}
      </Tab.Screen>

      <Tab.Screen name="Inventory">
        {() => (
          <AnimatedScreenWrapper>
            <InventoryScreen />
          </AnimatedScreenWrapper>
        )}
      </Tab.Screen>

      <Tab.Screen name="Parties">
        {() => (
          <AnimatedScreenWrapper>
            <PartyScreen />
          </AnimatedScreenWrapper>
        )}
      </Tab.Screen>

      <Tab.Screen name="More">
        {() => (
          <AnimatedScreenWrapper>
            <MoreScreen />
          </AnimatedScreenWrapper>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export {AppTabNavigation};
