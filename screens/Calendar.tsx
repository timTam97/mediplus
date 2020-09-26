import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image, Dimensions, TouchableHighlight, Alert } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

function Explore({ navigation }) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Date Saved",
      "Your selected date has been reserved.",
      [
        { text: "Done", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.dateTime}>Date &amp; Time</Text>
      <Image
        source={require("../assets/images/CalendarTop.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.calendar}>
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
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => { navigation.navigate("Book"); createTwoButtonAlert() }}>
        <Image
          source={require("../assets/images/saveButtonCalendar.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </TouchableHighlight>

      <Text style={styles.noThanks}>NO THANKS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flex: 1,
    backgroundColor: "rgba(249,249,249,1)"
  },

  calendar: {
    top: -35
  },

  dateTime: {
    fontFamily: "Lato_400Regular",
    color: "rgba(23,34,133,1)",
    fontSize: 35,
    marginTop: 20,
    marginLeft: 34
  },
  text74: {
    fontFamily: "Lato_400Regular",
    color: "rgba(161,164,178,1)",
    marginTop: -500,
    marginLeft: 34
  },
  image: {
    top: 10,
    alignSelf: "center",
    width: Dimensions.get('window').width
  },
  image2: {
    alignSelf: "center",
    height: 123,
    width: 295,
    marginTop: 291,
    marginLeft: 32
  },
  image3: {
    alignSelf: "center",
    height: 71,
    width: 278,
    marginTop: 8,
    // marginLeft: 44
  },
  noThanks: {
    alignSelf: "center",
    fontFamily: "Lato_400Regular",
    color: "rgba(161,164,178,1)",
    fontSize: 10,
    marginTop: 5,
  }
});

export default Explore;
