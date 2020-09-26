import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '../navigation';

export default function Appointments({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.dateTime}>Appointments</Text>
                <Text style={styles.text74}>Here are all of your appointments.</Text>
            </View>
            <View style={styles.calandar}>
            <Text style={styles.calandarDate}>Today, September 27</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Upcoming')}>
                <Image
                    source={require("../assets/images/panel.png")}
                    resizeMode="contain"
                    style={styles.calandarImage}
                ></Image>
            </TouchableOpacity>
            </View>
            
            <View>
                <Text style={{...styles.calandarDate2, fontSize: 22}}>Future Appointments</Text>
                
            </View>
            <Image
                    source={require("../assets/futureappts.png")}
                        resizeMode="contain"
                        style={styles.futureappointments}
                ></Image>
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
        marginTop:20,
    },
    calandarDate: {
        fontFamily: "Lato_700Bold",
        color: "#7A7D93",
        fontSize: 20
    },
    calandarDate2: {
        fontFamily: "Lato_700Bold",
        color: "#7A7D93",
        fontSize: 20,
        marginTop: 20
    },
    calandarImage: {
        width: "100%",
        height: 180,
        // backgroundColor: "#00FF00"
    },
    futureappointments: {
        width: '100%',
        height: 340,
    }
});