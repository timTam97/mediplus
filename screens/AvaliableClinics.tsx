import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';

export default function AvaliableClinics({navigation, route}) {
    function movetoDateTime() {
        navigation.navigate('DateTimeSelect')
    }
    let servicetype = null;
    if(route.params) {
        servicetype = route.params.service
    }
    return(
        <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <Text style={styles.foundText}>Here is what we found for {servicetype}</Text>
        <TouchableOpacity style={styles.boxes} activeOpacity={0.8} onPress={movetoDateTime}>
            <Text style={styles.boxTitle}>South Yarra Clinic</Text>
            <Text style={styles.boxAddress}>12 Yarra Street, Melbourne VIC</Text>
            <Text style={styles.boxDistance}>3 km</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.boxes, backgroundColor: "#6681FF"}} activeOpacity={0.8}
            onPress={movetoDateTime}>
            <Text style={styles.boxTitle}>Melb Family Clinic</Text>
            <Text style={styles.boxAddress}>8 Family Road, Melbourne VIC</Text>
            <Text style={styles.boxDistance}>4 km</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.boxes, backgroundColor: "#ACBCFF"}} activeOpacity={0.8}
            onPress={movetoDateTime}>
            <Text style={styles.boxTitle}>Royal Medical Clinic</Text>
            <Text style={styles.boxAddress}>4 Arnold Street, Melbourne VIC</Text>
            <Text style={styles.boxDistance}>4 km</Text>
        </TouchableOpacity>
        </View>
    )
}
    

const styles = StyleSheet.create({
    foundText: {
        fontFamily: "Lato_400Regular",
        fontSize: 20,
        color: "#7A7D93",
        marginLeft: Dimensions.get('window').width / 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapStyle: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
        width: Dimensions.get('window').width - (Dimensions.get('window').width/10),
        height: Dimensions.get('window').height / 3,
        borderRadius: 15,
    },
    boxes: {
        backgroundColor: "#4A65E3",
        alignSelf: "center",
        width: Dimensions.get('window').width - (Dimensions.get('window').width/10),
        shadowColor: '#e0e0ec',
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 30,  
        elevation: 5,
        borderRadius: 15,
        marginTop: 10,
        height: 100,
        paddingTop: 18,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    boxTitle: {
        fontFamily: "Lato_900Black",
        color: "#FFF",
        fontSize: 25,
        marginBottom:10
    },
    boxAddress: {
        fontFamily: "Lato_400Regular",
        color: "#FFF",
        fontSize: 15,
    },
    boxDistance: {
        fontFamily: "Lato_900Black",
        color: "#FFF",
        fontSize: 25,
        position: "absolute",
        left: "85%",
        top: "50%",
        transform: [
            {translateY: -1}
        ]
    }
});