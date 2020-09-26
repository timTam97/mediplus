import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BookParamList, Services } from '../types'
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView,TouchableOpacity,TouchableHighlight } from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";

//need to fix the links to other screens!!

export default function User({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.appointmentMsg}>Afsar Sohan</Text>
        <Text style={styles.appointmentMsg2}>DOB: 1998   ID:M00273</Text>
        <View style={styles.container}>
     
    </View>
        
        <View style={styles.imageRow}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <Image
            source={require("../assets/fram5/6.png")}
            resizeMode="contain"
            style={styles.image}>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => navigation.navigate('HealthInsights')}>
          <Image
            source={require("../assets/fram5/4.png")}
            resizeMode="contain"
            style={styles.image5}>
          </Image>
          </TouchableHighlight>
        </View>

        <View style={styles.image2Col}> 
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => navigation.navigate('Medication')}>
          <Image
            source={require("../assets/fram5/5v2.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
            </TouchableHighlight>
        </View>
        <Text style={styles.appointmentMsg22}>Next appointments (23)</Text>

        <View style={styles.image2Col}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <Image
            source={require("../assets/fram5/2.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image3Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <Image
            source={require("../assets/fram5/1v2.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image3Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <Image
            source={require("../assets/fram5/other.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image4Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <Image
            source={require("../assets/fram5/see.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
            </TouchableHighlight>
        </View>


        <View style={styles.image5Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {navigation.navigate('Appointments')}}>
          <Image
            source={require("../assets/fram5/3.png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
            </TouchableHighlight>
        </View>

        </ScrollView>
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: 210,
      height: 180,
      marginRight: -5,
      marginLeft: -20, 
      marginTop: 20
    },
    image5: {
      width: 210,
      height: 175,
      marginRight: 0,
      marginLeft:-29,
      marginTop: 20
    },
    imageRow: {
      height: 149,
      flexDirection: "row",
      marginTop: 20,
      marginLeft: 25,
      marginRight: 29,
      marginBottom:10
    },
    image2: {
      width: 330,
      height: 150,
      marginLeft:-20, 
      marginTop: 25
    },
    image4: {
      width: 149,
      height: 160,
      marginLeft: -95,
      marginTop: 20
    },
    image2Col: {
      height: 149,
      flexDirection: "column",
      marginBottom: 0,
      marginLeft: 55,
      marginRight: 29
    },
    image3Col: {
        height: 149,
        flexDirection: "row",
        marginTop: 0,
        marginLeft: 55,
        marginRight: 29
      },
    image3: {
      width: 300,
      height: 250,
      marginLeft: -95,
      marginTop: -210
    },
    image6: {
        width: 300,
        height: 250,
        marginLeft: -95,
        marginTop: -270
    },
    image7: {
        width: 345,
        height: 250,
        marginLeft: -105,
        bottom: -18
    },
    image8: {
        width: 345,
        height: 60,
        marginLeft: -120,
        marginTop: -505
    },
    image3Row: {
      height: 150,
      flexDirection: "row",
      marginTop: 0,
      marginLeft: 150
    
    },
    image4Row: {
        height: 5,
        flexDirection: "row",
        marginTop: -360,
        marginLeft: 135
    },
    image5Row: {
        height: 150,
        flexDirection: "row",
        marginTop: -7,
        marginLeft: 10
      
      },
    cupertinoFooter2: {
      height: 49,
      width: 375,
      marginTop: 36
    },
    cupertinoHeaderWithLargeTitle: {
      height: 96,
      width: 375,
      backgroundColor: "#fff",
      marginTop: -753,
      alignSelf: "center"
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 23,
      marginLeft: 97
    },
    whatAreYouAft: {
      fontFamily: "roboto-regular",
      color: "rgba(161,164,178,1)",
      marginTop: -16,
      marginLeft: 19
    },
    appointmentMsg: {
        fontFamily: "Lato_700Bold",
        color: "#172285",
        fontSize: 40,
        height: 40,
        width: 300,
        marginTop: 40,
        marginLeft: 110
    },
    appointmentMsg2: {
        fontFamily: "Lato_400Regular",
        color: "#A1A4B2",
        fontSize: 17,
        height: 18,
        width: 300,
        marginTop: 5,
        marginLeft: 110
    },
    appointmentMsg22: {
      fontFamily: "Lato_700Bold",
      color: "#7A7D95",
      fontSize: 20,
      width: 300,
      marginTop: 8,
      marginLeft: 35
  },
  });