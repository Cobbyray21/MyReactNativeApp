import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Home from "./screens/Home" ;
import CartList from './screens/Cart';
import Loginpage from './screens/Login';
import Homepage from './screens/Home';



  const MainNav = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <MainNav.Navigator 
        screenOptions={{headershown: false}}
         initialRouteName = "Login" >
        <MainNav.Screen name = "Home" component={Homepage} />
        <MainNav.Screen name="Login" component={Loginpage} />
        
          
        </MainNav.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;