import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { TouchableRipple } from 'react-native-paper';

export default function AvaliableClinics({navigation, route}) {
    function movetoDateTime(place: string) {
        navigation.navigate('Calendar', {place: place})
    }
    let servicetype = null;
    if(route.params) {
        servicetype = route.params.service
    }
    return(
        <View style={styles.container}>
        <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude: -37.8136,
            longitude: 144.9631,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }}>
            <Marker coordinate={{latitude: -37.832118, longitude: 144.997755}}
                pinColor = {"#4A65E3"} // any color
                title={"South Yarra Clinic"}
                description={"12 Yarra Street, Melbourne VIC"} />
        </MapView> 
        <Text style={styles.foundText}>Here is what we found for {servicetype}</Text>
        <TouchableRipple style={styles.boxes} rippleColor="#172285"
            onPress={() => movetoDateTime("South Yarra Clinic")}
            borderless={true}>
            <View>
                <Text style={styles.boxTitle}>South Yarra Clinic</Text>
                <Text style={styles.boxAddress}>12 Yarra Street, Melbourne VIC</Text>
                <Text style={styles.boxDistance}>3 km</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple style={{...styles.boxes, backgroundColor: "#6681FF"}} 
            onPress={() => movetoDateTime("Melb Family Clinic")}
            rippleColor="#172285" borderless={true}>
            <View>
                <Text style={styles.boxTitle}>Melb Family Clinic</Text>
                <Text style={styles.boxAddress}>8 Family Road, Melbourne VIC</Text>
                <Text style={styles.boxDistance}>4 km</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple style={{...styles.boxes, backgroundColor: "#ACBCFF"}} 
            onPress={() => movetoDateTime("Royal Medical Clinic")}
            rippleColor="#172285" borderless={true}>
            <View>
                <Text style={styles.boxTitle}>Royal Medical Clinic</Text>
                <Text style={styles.boxAddress}>4 Arnold Street, Melbourne VIC</Text>
                <Text style={styles.boxDistance}>4 km</Text>
            </View>
        </TouchableRipple>
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
        marginBottom:10,
        zIndex: 10, // works on ios
        elevation: 10, // works on android
    },
    boxAddress: {
        fontFamily: "Lato_400Regular",
        color: "#FFF",
        fontSize: 15,
        zIndex: 10, // works on ios
        elevation: 10, // works on android
    },
    boxDistance: {
        fontFamily: "Lato_900Black",
        color: "#FFF",
        fontSize: 25,
        position: "absolute",
        left: "85%",
        top: "50%",
        zIndex: 10, // works on ios
        elevation: 10, // works on android
        transform: [
            {translateY: -1}
        ]
    }
});