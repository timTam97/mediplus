import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function Explore() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.dateTime}>Date &amp; Time</Text>

      <Image
        source={require("../assets/images/CalendarTop.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>

      <View style = {styles.calendar}>
      <CalendarList
        pastScrollRange={24}
        futureScrollRange={24}
        horizontal
        pagingEnabled
        />
      </View>

      <Text style={styles.text74}>Select from the available times:</Text>

      <Image
        source={require("../assets/images/calendartimes.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>

      <Image
        source={require("../assets/images/saveButtonCalendar.png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
      <Text style={styles.noThanks}>NO THANKS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(249,249,249,1)"
  },

  calendar: { 
      top: 50
  },

  dateTime: {
    fontFamily: "Lato_400Regular",
    color: "rgba(23,34,133,1)",
    fontSize: 35,
    marginTop: 78,
    marginLeft: 34
  },
  text74: {
    fontFamily: "Lato_400Regular",
    color: "rgba(161,164,178,1)",
    marginTop: 328,
    marginLeft: 34
  },
  image: {
    top: 10
  },
  image2: {
    height: 123,
    width: 295,
    marginTop: 291,
    marginLeft: 32
  },
  image3: {
    height: 71,
    width: 278,
    marginTop: 8,
    marginLeft: 44
  },
  noThanks: {
    fontFamily: "Lato_400Regular",
    color: "rgba(161,164,178,1)",
    fontSize: 10,
    marginTop: 5,
    marginLeft: 156
  }
});

export default Explore;
