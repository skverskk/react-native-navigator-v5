import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
const Stack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Business Search', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 30,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainStackNavigator;
