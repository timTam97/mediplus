import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BookParamList, Services } from '../types'


import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView,TouchableOpacity,TouchableHighlight } from "react-native";

export default function Book({navigation}){
    const selectService = (service: Services) => {
        navigation.navigate('AvaliableClinics', {service: service})
        
    }
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.imageRow}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService("General")}>
          <Image
            source={require("../assets/service/gp.png")}
            resizeMode="contain"
            style={styles.image}>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService("X-Ray")}>
          <Image
            source={require("../assets/service/xray.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          </TouchableHighlight>
    
        </View>

        <View style={styles.image2Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
          <Image
            source={require("../assets/service/obgyn.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Cardio')}>
          <Image
            source={require("../assets/service/Cardiology.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableHighlight>

        </View>
        <View style={styles.image3Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Pathology')}>
          <Image
            source={require("../assets/service/Pathology.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Orthopedics')}>
          <Image
            source={require("../assets/service/orthopedics.png")}
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
      flex: 1
    },
    image: {
      width: 149,
      height: 149
    },
    image5: {
      width: 149,
      height: 149,
      marginLeft: 23
    },
    imageRow: {
      height: 149,
      flexDirection: "row",
      marginTop: 219,
      marginLeft: 25,
      marginRight: 29
    },
    image2: {
      width: 149,
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
      width: 150,
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
    cupertinoSearchBarBasic: {
      height: 33,
      width: 324,
      backgroundColor: "#fff",
      marginTop: 12,
      marginLeft: 22
    }
  });