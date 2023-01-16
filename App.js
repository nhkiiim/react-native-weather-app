import * as Location from 'expo-location';
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    ActivityIndicator
} from "react-native";

//무료 API KEY & 학습용이므로 그대로 등록
const API_KEY = "cd3216bf1af637ae6ba0dc759d5ba816";
const { width:SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
    const [city, setCity] = useState("Loading..^0^")
    const [days, setDays] = useState([]);
    const [ok, setOk] = useState(true);

    const getWeather = async () => {
       const {granted} = await Location.requestForegroundPermissionsAsync();

       if(!granted) {
           setOk(false);
       }

       const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
       const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});

       setCity(location[0].city);
       const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
       const json = await response.json();
       // setDays(json.daily);
    }

    useEffect(() => {
        getWeather();
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
           { days.length === 0 ? (
            <View style={styles.day}>
                <ActivityIndicator color="white" size="large"/>
            </View>
           ) : (
            <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
            </View>
           )}
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