import React , { useEffect, useState } from "react";
import { TextInput, View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

import { LoadingScreen } from "./LoadingScreen";
export const Dashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [currency, setCurrency] = useState("");
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={{ marginTop: 50 ,   }}>
      <Text style={styles.heading}>Dashboard</Text>

      <View style={[styles.justifyBetween ,{marginTop:20 , marginBottom:10 , paddingHorizontal:20}]}>
        <Text style={styles.SubHeading}>Trending coins</Text>
        <Pressable onPress={()=>navigation.navigate("TrendingCoin")}>
        <Text style={[styles.SubHeading , {color:"#0D88C3"}]}>View All</Text>
        </Pressable>
      </View>
   
      <View style={[styles.justifyBetween ,{ paddingHorizontal:20 , marginTop:20 , }]}>
        <Text style={styles.SubHeading}>All coins</Text>
        <Pressable onPress={()=>navigation.navigate("AllCoins")}>
        <Text style={[styles.SubHeading , {color:"#0D88C3"}]}>View All</Text>
        </Pressable>
      </View>
  
      <View style={{marginBottom:200}}/> 
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    textAlign:"center" , fontSize:17 , fontWeight:"600" 
  },
  SubHeading:{
   fontSize:16 , fontWeight:"500" 
  },
  justifyBetween:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  }
 
});
