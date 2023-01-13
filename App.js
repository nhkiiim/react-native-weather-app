import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import * as Location from 'expo-location';

const { width:SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
    const [city, setCity] = useState("Loading..^0^")
    const [location, setLocation] = useState();
    const [ok, setOk] = useState(true);
    const ask = async () => {
       const {granted} = await Location.requestForegroundPermissionsAsync();

       if(!granted) {
           setOk(false);
       }

       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
       const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});

       console.log(location[0].city);
       setCity(location[0].city);
    }

    useEffect(() => {
        ask();
    }, []);

  return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.weather}
        >
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
    fontSize: 38,
    fontWeight: "500",
  },
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 40,
    fontSize: 128,
    fontWeight: "700",
  },
  description: {
    marginTop: -10,
    fontSize: 40,
  }
});