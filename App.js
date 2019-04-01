import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import  HomeScreen from './src/screens/Home'
import ShowScreen from './src/screens/Show'


const AppNavigator = createStackNavigator(
  {
  Home: { screen: HomeScreen },
  Show: { screen: ShowScreen },
  }, 
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

