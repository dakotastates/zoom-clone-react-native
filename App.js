import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './screens/IndexScreen'
import JoinScreen from './screens/JoinScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import RoomScreen from './screens/RoomScreen'

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleAlign: 'center',
  headerTitleStyle: { color: 'white'},
  headerTintColor: 'white',
};

export default function App() {
  return (
    <NavigationContainer
      linking={{
       prefixes: ["http://localhost:19006/"],
       config: {
         screens: {
           Index: "",
           Home: "home",
           Join: "join",
           Login: "login",
           Register: "register",
           Room: "room/:roomId"
         }
       }
     }}

    >
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name='Index' component={IndexScreen}/>
        <Stack.Screen name='Join' component={JoinScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Room' component={RoomScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
