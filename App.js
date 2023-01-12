import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <ScrollView horizontal  contentContainerStyle={styles.weather}>
            <View style={styles.day}>
                <Text style={styles.temp}>27</Text>
                <Text style={styles.description}>Sunny</Text>
            </View>
           <View style={styles.day}>
                <Text style={styles.temp}>27</Text>
                <Text style={styles.description}>Sunny</Text>
           </View>
           <View style={styles.day}>
                <Text style={styles.temp}>27</Text>
                <Text style={styles.description}>Sunny</Text>
           </View>
           <View style={styles.day}>
                <Text style={styles.temp}>27</Text>
                <Text style={styles.description}>Sunny</Text>
           </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     backgroundColor: "gold",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
    fontWeight: "500",
  },
  weather: {

  },
  day: {
    width: 300,
    alignItems: "center",
  },
  temp: {
    marginTop: 40,
    fontSize: 128,
    fontWeight: "600",
  },
  description: {
    marginTop: -10,
    fontSize: 40,
  }
})