import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import RestaurantDetails from './src/screens/RestaurantDetails';

export default function navigation() {

    const Stack = createStackNavigator();
    const screenOption = {
        headerShow: false,
    }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOption={screenOption}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Restaurant Details" component={RestaurantDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
