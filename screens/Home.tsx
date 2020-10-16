import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import {getTravelTime} from '../components/MyDirectionAdapter';
import { Pedometer } from 'expo-sensors';


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const cardPadding = 30;
const totalPadding = 26 * 3; // left-side, in-between, right-side
const imageWidth = (screenWidth - totalPadding) / 2;
const imageHeight = 150;

export default function Home({navigation}) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 7);
  Pedometer.getStepCountAsync(start, end).then(
    result => {
      console.log(result);
      global.weeklySteps = result.steps;
    },
    error => {
      console.log(error);
    }
  );

  // I don't wanna go broke.
  // Replacing this with dummy data.
  // getTravelTime()
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data.rows[0].elements[0].distance.text);
  //       console.log(data.rows[0].elements[0].duration.text);
  //       return data;
  //     })
  //     .then((data) => {
  //       global.distanceText = data.rows[0].elements[0].distance.text;
  //       global.timeVal = data.rows[0].elements[0].duration.value;
  //     });
    global.distanceText = "25 km";
    global.timeVal = 2500;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Image
          source={require('../assets/Greeting.png')}
          resizeMode="contain"
          style={styles.greeting}
        ></Image>
      </View>

      <View style={styles.headerContent1}>
        <Text style={styles.textStyle}>Upcoming Appointments</Text>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Image
          source={require('../assets/appointmentOne.png')}
          resizeMode="contain"
          style={styles.appointment1}
        ></Image>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.button1}>
          <Image
            source={require('../assets/appointmenttoo.png')}
            resizeMode="contain"
            style={styles.appointment2}
          ></Image>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Book', {})}>
        <Image
          source={require('../assets/bookAppointment.png')}
          resizeMode="contain"
          style={styles.bookImage}
        ></Image>
      </TouchableOpacity>
      <SafeAreaView style={styles.bottomContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.textStyle}>Your Medications</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainerStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToStart
        >
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
            <Image
              source={require('../assets/med1.png')}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
            <Image
              source={require('../assets/med3.png')}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
            <Image
              source={require('../assets/med4.png')}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
            <Image
              source={require('../assets/med5.png')}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
            <Image
              source={require('../assets/med6.png')}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    paddingLeft: 40,
    position: 'absolute',
    left: -10,
    top: 10,
    justifyContent: 'center',
  },
  headerContent1: {
    paddingLeft: 40,
    position: 'absolute',
    left: -10,
    top: 115,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#807B7B',
    lineHeight: 20,
  },
  image6: {
    width: 129,
    height: 140,
    marginHorizontal: 10,
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    height: 200,
    paddingLeft: 20,
    paddingRight: 100,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: -180,
    justifyContent: 'center',
    width: 500,
    height: 357,
    flex: 2,
  },
  cardItemImagePlace: {
    backgroundColor: '#ccc',
    flex: 1,
    minHeight: 359,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    alignItems: 'center',
    marginTop: 405,
  },
  bookImage: {
    paddingHorizontal: 20,
    position: 'relative',
    width: 360,
    height: 130,
  },
  button1: {
    alignItems: 'center',
    top: 100,
    paddingHorizontal: 20,
  },
  appointment1: {
    paddingHorizontal: 20,
    position: 'absolute',
    top: 160,
    alignContent: 'center',
    width: 400,
    height: 122.5,
    left: 10,
  },
  cardContainer: {
    flex: 3,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  appointment2: {
    paddingHorizontal: 0,
    paddingRight: 10,
    position: 'absolute',
    top: 60,
    alignItems: 'center',
    width: 400,
    height: 400,
    left: 4,
  },
  button2: {
    alignItems: 'center',
    top: 0,
    paddingHorizontal: 20,
  },
  greeting: {
    width: 350,
    height: 250,
    top: -70,
    left: 30,
  },
  greetingContainer: {
    height: 0,
  },
});
