import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BookParamList, Services } from '../types'
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView,TouchableOpacity,TouchableHighlight } from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";

export default function Book({navigation}){
    const selectService = (service: Services) => {
        navigation.navigate('AvaliableClinics', {service: service})
        
    }
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.appointmentMsg}>Find a Service</Text>
        <Text style={styles.appointmentMsg2}>What are you after today?</Text>
        <View style={styles.container}>
      <CupertinoSearchBarBasic
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
    </View>
        
        <View style={styles.imageRow}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService("General")}>
          <Image
            source={require("../assets/service/gpv2.png")}
            resizeMode="contain"
            style={styles.image}>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService("X-Ray")}>
          <Image
            source={require("../assets/service/xrayv2.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          </TouchableHighlight>
    
        </View>

        <View style={styles.image2Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
          <Image
            source={require("../assets/service/obgynv2.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Cardio')}>
          <Image
            source={require("../assets/service/Cardiologyv2.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableHighlight>

        </View>
        <View style={styles.image3Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Pathology')}>
          <Image
            source={require("../assets/service/Pathologyv2.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Orthopedics')}>
          <Image
            source={require("../assets/service/orthopedicsv2.png")}
            resizeMode="contain"
            style={styles.image6}
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
      width: 170,
      height: 150
    },
    image5: {
      width: 150,
      height: 150,
      marginLeft: 23
    },
    imageRow: {
      height: 150,
      flexDirection: "row",
      marginTop: 20,
      marginLeft: 25,
      marginRight: 29
    },
    image2: {
      width: 170,
      height: 149
    },
    image4: {
      width: 149,
      height: 149,
      marginLeft: 26
    },
    image2Row: {
      height: 149,
      flexDirection: "row",
      marginTop: 17,
      marginLeft: 22,
      marginRight: 29
    },
    image3: {
      width: 170,
      height: 150
    },
    image6: {
      width: 149,
      height: 149,
      marginLeft: 25
    },
    image3Row: {
      height: 150,
      flexDirection: "row",
      marginTop: 15,
      marginLeft: 22,
      marginRight: 29
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
        width: 300,
        marginTop: 40,
        marginLeft: 30
    },
    appointmentMsg2: {
        fontFamily: "Lato_400Regular",
        color: "#A1A4B2",
        fontSize: 18,
        width: 300,
        marginTop: 20,
        marginLeft: 30, 
        marginBottom: 10
    },

    cupertinoSearchBarBasic: {
        height: 35,
        width: 380,
        backgroundColor: "#F2F2F2",
        paddingLeft: 30, 
        marginBottom: 18
    }

  });