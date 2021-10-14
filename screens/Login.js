import React  from "react";
import {View, Text, Image, StyleSheet, onPress, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';




const  Comp = (props) => {
  return(
  <TouchableOpacity style={{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "#e3e3e3",
    margin: 10,
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 10
     }}>
    
       <AntDesign name={props.logo} size={24} color={props.logocolor} />
    <Text style = {{
      fontSize: 20,
      marginLeft: 10}} >
    Login with {props.id}
    </Text>
  </TouchableOpacity>
  );
}
function Login(navigation) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white"}}>
        <Image 
        style = {{
          width: 200, 
          height: 150,
          borderRadius: 70,
        
           }} 
          source = {{
          uri:"https://images.unsplash.com/photo-1591831763226-916d8ebea4f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
        }}/>
        <Text style={{ color: "black", fontSize: 22, alignItems: 'center', justifyContent: "center"}}> Welcome to
          </Text>
          <Text style={{ fontSize: 26 ,fontWeight: "bold"}} >Power Bike Shop</Text>
         
           <Comp id ="Gmail" logo ="google" logocolor ="red"  />
          <Comp id ="Apple" logo ="apple1" logocolor ="white" />
          <Text style ={{ marginTop: 5, fontWeight:500, color: "grey"}} >Not a member?{" "}
            <TouchableOpacity>
              <Text style= {{fontWeight: "bold", color: "orange"}}>
              Sign Up
            </Text>
          </TouchableOpacity>
          </Text>
      </View>
    );
  }
  

  export default Login;