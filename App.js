import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <View style={styles.weather}>
        </View>
      </View>
  );
}

//별도의 파일로 만들기도 함
const styles = StyleSheet.create({
  container: {
     flex: 1, 
     backgroundColor: "tomato", 
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 38,
    fontWeight: "300"
  },
  weather: {
    flex: 3,
  }
})