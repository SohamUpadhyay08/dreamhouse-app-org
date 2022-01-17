import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import Buy from "../screens/Buy"
import Sell from "../screens/Sell"
import Properties from "../screens/Properties"

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {
  render(){
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Buy" component={Buy} />
      <Stack.Screen name="Sell" component={Sell} />
      <Stack.Screen name="Properties" component={Properties} />
      
    </Stack.Navigator>
  );
}
}