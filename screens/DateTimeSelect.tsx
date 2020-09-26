import React from 'react'
import {StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'

export default function DateTimeSelect({navigation, route}){
    return(
        <View style={styles.container}>
        <Text>Hello</Text>
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