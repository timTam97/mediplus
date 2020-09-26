import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Appointments(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.dateTime}>Appointments</Text>
                <Text style={styles.text74}>Here are all of your appointments.</Text>
            </View>
            <View>
            <Text>Today, September 27</Text>
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
});