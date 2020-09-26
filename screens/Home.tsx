import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const cardPadding = 30
const totalPadding = 26 * 3 // left-side, in-between, right-side
const imageWidth = (screenWidth - totalPadding) / 2
// const imageWidth = 160
const imageHeight = 150

export default function Home(){
    return(
        <SafeAreaView style={styles.bottomContainer}>
            <View style={styles.headerContent}>
                <Text style={styles.textStyle}>Medications</Text>
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
    }
  });