import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import Profile from '../screens/Profile';
import LogoutScreen from '../screens/LogoutScreen';
import HelpScreen from '../screens/HelpScreen'
import SelledProp from '../screens/SelledProp'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ unMountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unMountOnBlur: true }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{ unMountOnBlur: true }}
      />
      <Drawer.Screen
        name="Selled Properties"
        component={SelledProp}
        options={{ unMountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ unMountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
}
}