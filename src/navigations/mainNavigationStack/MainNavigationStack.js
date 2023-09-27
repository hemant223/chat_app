import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from '../drawerNavigation/DrawerNavigation';
import Chattting from '../../screens/chatting/Chattting';
import LoginScreen from '../../screens/chatting/LoginScreen';
import SinupScreen from '../../screens/chatting/SinupScreen';
import SplashScreen from '../../screens/chatting/SplashScreen';
import Users from '../../screens/chatting/Users';



const MainNavigationStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}  
      initialRouteName='SplashScreen' >  
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SinupScreen"
          component={SinupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chattting"
          component={Chattting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashBoard"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationStack;

