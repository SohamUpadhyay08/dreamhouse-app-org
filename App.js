import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Loading from './screens/Loading';
import DrawerNavigator from './navigations/DrawerNavigator';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import firebase from 'firebase';
import { firebaseConfig } from "./Config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
 Loading: Loading,
 LoginScreen: LoginScreen,
DashboardScreen: DashboardScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render() {
    return (
     <AppNavigator/>
    );
  }
}
