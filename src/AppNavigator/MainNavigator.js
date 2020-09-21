import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const TabNavigator = createBottomTabNavigator(
  {},
  {
    initialRouteName: '',
    lazy: true,
    animationEnabled: false,
    tabBarOptions: {
      style: {},
      labelStyle: {},
      tabStyle: {},
    },
  },
);
const MainStack = createStackNavigator(
  {},
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

const MainNavigator = MainStack;

export default createAppContainer(MainNavigator);
