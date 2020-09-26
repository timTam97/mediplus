import React from 'react'
import MapView from 'react-native-maps';
import {StyleSheet, View, Text, Dimensions } from 'react-native'

export default function AvaliableClinics({navigation, route}){
    let servicetype = null;
    if(route.params) {
        servicetype = route.params.service
    }
    return(
        <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <Text style={styles.foundText}>Here is what we found for {servicetype}</Text>
        <View style={styles.boxes}>
            <Text>Hello</Text>
            <Text>How are you</Text>
        </View>
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
        alignSelf: "center",
        width: Dimensions.get('window').width - (Dimensions.get('window').width/10),
        height: Dimensions.get('window').height / 3,
        borderRadius: Dimensions.get('window').height,
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
        justifyContent: 'center',
        height: 100,
    },
});