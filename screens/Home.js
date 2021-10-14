import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


 function Home(){
    return (
    <View style={{flex: 1, backgroundColor= "white", paddingTop: 55, paddingHorizontal: 20}}>
    
        <AntDesign name="search1" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <Ionicons name="menu-outline" size={24} color="black" />
    </View>
    );
}
export default Home;