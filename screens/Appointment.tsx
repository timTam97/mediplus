import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Appointments(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.dateTime}>Appointments</Text>
                <Text style={styles.text74}>Here are all of your appointments.</Text>
            </View>
            <View style={styles.calandar}>
            <Text style={styles.calandarDate}>Today, September 27</Text>
            <Image
            source={require("../assets/images/panel.png")}
                resizeMode="contain"
                style={styles.calandarImage}
            ></Image>
            </View>
            <View>
                <Text style={{...styles.calandarDate, fontSize: 30}}>Future Appointments</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "rgba(249,249,249,1)",
        paddingHorizontal: 34
    },
    text74: {
        fontFamily: "Lato_400Regular",
        color: "rgba(161,164,178,1)",
        fontSize: 18,
    },
    dateTime: {
        fontFamily: "Lato_700Bold",
        color: "rgba(23,34,133,1)",
        fontSize: 35,
        marginTop: 30,
    },
    calandar: {
        marginTop:40,
    },
    calandarDate: {
        fontFamily: "Lato_700Bold",
        color: "#7A7D93",
        fontSize: 20,
    },
    calandarImage: {
        width: "100%",
        height: 180,
        // backgroundColor: "#00FF00"
    }
});