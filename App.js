import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { image,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Home from "./screens/Home" ;


  const MainNav = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <MainNav.Navigator screenOptions={{headershown: false}} initialRouteName = "Home" >
        <MainNav.Screen name = "Home" component={Home} />
        <MainNav.Screen name="Login" component={Login} />
          
        </MainNav.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;