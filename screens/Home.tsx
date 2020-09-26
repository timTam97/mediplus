import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const cardPadding = 30
const totalPadding = 26 * 3 // left-side, in-between, right-side
const imageWidth = (screenWidth - totalPadding) / 2
const imageHeight = 150

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContent1}>
                <Text style={styles.textStyle}>Upcoming Appointments</Text>
            </View>
            <TouchableOpacity style ={styles.button2}>
                    <Image
                        source={require("../assets/appointmentOne.png")}
                        resizeMode="contain"
                        style={styles.appointment1}
                    ></Image>
                </TouchableOpacity>
            <View>
                <TouchableOpacity style ={styles.button1}>
                    <Image
                        source={require("../assets/appointmenttoo.png")}
                        resizeMode="contain"
                        style={styles.appointment2}
                    ></Image>
                </TouchableOpacity>
            </View>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require("../assets/bookAppointment.png")}
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
                >
                    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
                        <Image
                            source={require("../assets/medications/medOne.png")}
                            resizeMode="contain"
                            style={styles.image6}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
                        <Image
                            source={require("../assets/medications/medOne.png")}
                            resizeMode="contain"
                            style={styles.image6}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
                        <Image
                            source={require("../assets/medications/medOne.png")}
                            resizeMode="contain"
                            style={styles.image6}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
                        <Image
                            source={require("../assets/medications/medOne.png")}
                            resizeMode="contain"
                            style={styles.image6}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
                        <Image
                            source={require("../assets/medications/medOne.png")}
                            resizeMode="contain"
                            style={styles.image6}
                        ></Image>
                    </TouchableHighlight>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    headerContent: {
        paddingLeft: 40,
        position: 'absolute',
        left: 0,
        top: 5,
        justifyContent: "center"
      },
      headerContent1: {
        paddingLeft: 40,
        position: 'absolute',
        left: -10,
        top: 82,
        justifyContent: "center"
      },
    textStyle: {
        fontSize: 20,
        color: "#807B7B",
        lineHeight: 20
    },
    image6: {
        width: 129,
        height: 140,
        marginHorizontal: 25
      },
    scrollViewContainerStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      paddingHorizontal: 200,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: -170,
        justifyContent: 'center',
        width: 500,
        height: 357,
        flex: 2,
    },
    cardItemImagePlace: {
        backgroundColor: "#ccc",
        flex: 1,
        minHeight: 359
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    button: {
        alignItems: "center",        
        paddingTop: 10
    },
    bookImage: {
        paddingHorizontal: 20,
        position: 'relative',
        top: 100,
        width: '100%',
        height: '100%'
    },
    button1: {
        alignItems: 'center',
        top: 100,
        paddingHorizontal: 20
    },
    appointment1: {
        paddingHorizontal: 20,
        position: 'absolute',
        top: 0,
        alignContent: 'center',
        width: 400,
        height: 400,
    },
    cardContainer: {
        flex: 3,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: "absolute",
        top: 0
    },
    appointment2: {
        paddingHorizontal: 0,
        paddingRight: 10,
        position: 'absolute',
        top: 40,
        alignItems: 'center',
        width: 400,
        height: 400,
        left: 4
    },
    button2: {
        alignItems: 'center',
        top: 0,
        paddingHorizontal: 20
    },
  });