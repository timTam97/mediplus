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
    const selectService = (service: Services) => {
        navigation.navigate('AvaliableClinics', {service: service})
        
    }
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.appointmentMsg}>Afsar Sohan</Text>
        <Text style={styles.appointmentMsg2}>DOB: 1998 pls fix links + insert ID</Text>
        <View style={styles.container}>
     
    </View>
        
        <View style={styles.imageRow}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService("General")}>
          <Image
            source={require("../assets/fram5/6.png")}
            resizeMode="contain"
            style={styles.image}>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService("X-Ray")}>
          <Image
            source={require("../assets/fram5/4.png")}
            resizeMode="contain"
            style={styles.image5}>
          </Image>
          </TouchableHighlight>
        </View>

        <View style={styles.image2Col}> 
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('Medication')}>
          <Image
            source={require("../assets/fram5/5.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image2Col}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
          <Image
            source={require("../assets/fram5/2.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image3Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
          <Image
            source={require("../assets/fram5/1.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image3Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
          <Image
            source={require("../assets/fram5/1.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
            </TouchableHighlight>
        </View>

        <View style={styles.image4Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
          <Image
            source={require("../assets/fram5/see.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
            </TouchableHighlight>
        </View>


        <View style={styles.image5Row}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => selectService('OB/GYN')}>
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
      width: 180,
      height: 180,
      marginRight: -10,
      marginLeft: -13
    },
    image5: {
      width: 180,
      height: 175,
      marginRight: 0,
      marginLeft:5
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
      marginLeft:-30
    },
    image4: {
      width: 149,
      height: 160,
      marginLeft: -110,
      marginTop: -5
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
      marginTop: -250
    },
    image6: {
        width: 300,
        height: 250,
        marginLeft: -95,
        marginTop: -305
    },
    image7: {
        width: 350,
        height: 250,
        marginLeft: -120,
    },
    image8: {
        width: 345,
        height: 60,
        marginLeft: -120,
        marginTop: -600
    },
    image3Row: {
      height: 150,
      flexDirection: "row",
      marginTop: 0,
      marginLeft: 150
    
    },
    image4Row: {
        height: 150,
        flexDirection: "row",
        marginTop: -380,
        marginLeft: 135
      
    },
    image5Row: {
        height: 150,
        flexDirection: "row",
        marginTop: 0,
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
        marginTop: 10,
        marginLeft: 120
    },
    appointmentMsg2: {
        fontFamily: "Lato_400Regular",
        color: "#A1A4B2",
        fontSize: 18,
        height: 18,
        width: 300,
        marginTop: 10,
        marginLeft: 120
    },
  });