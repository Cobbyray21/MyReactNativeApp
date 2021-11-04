import React  from "react";
import {View, Text, Image, StyleSheet, onPress, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

const LoginButton = ({logo, logoColor, id, groundColor, textColor}) => {
  return(
  <TouchableOpacity 
   style={{flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: `${groundColor}`,
    margin: 10,
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 10
     }}
     >
    
       <AntDesign name={logo} size={24} color={logoColor} />
    <Text style = {{
      fontSize: 20,
      marginLeft: 10,
    color : `${textColor}`}}
       >
    Login with {id}
    </Text>
  </TouchableOpacity>
  );
}
  

 const Loginpage = ()=> {
  
      const navigation=useNavigation()
  
      const handleHomepage=()=>{
          navigation.navigate("Home")
      }
  
    return (
      <View style={{ 
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white"}}>
       
       <View style= {{  
        justifyContent:"center",
        alignItems:"center"    }} >
        <Image 
        style = {{
          
          justifyContent:"center",
          alignItems:"center",
          width:200,
        height: 220,
        borderRadius: 20,
        transform: [{ rotate: '-45deg' }] 
         
         }} 
          source = {{
          uri: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        }}/>
        </View>
        

        <Text style={{ marginTop: 70,color: "black", fontSize: 22, alignItems: 'center', justifyContent: "center"}}> Welcome to
          </Text>
          <Text style={{ fontSize: 26 ,fontWeight: "bold"}} >Power Bike Shop</Text>
         
           <LoginButton 
           id = "Gmail"
           groundColor = "#e3e3e3" 
            logo = "google"
            logoColor = "red" 
            textColor = "black"
            />

             <LoginButton 
           id = "Apple"
           groundColor = "black" 
            logo = "apple1"
            logoColor = "white" 
            textColor = "white"
            />
  
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
  
  export default Loginpage;
