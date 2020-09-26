import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
// import { Text, View } from '../components/Themed';
import * as DirectionUtil from '../components/MyDirectionAdapter'
import * as Location from 'expo-location';
import { Text, View } from 'react-native';

var appointmentTime: number = Date.now();
appointmentTime = appointmentTime + (14 * (60 * 60 * 1000))

class UpdateTime extends React.Component {
    componentDidMount() {
        // in the end we gon update every minute.
        // suits the time well, as well as a balanced time period
        // for snooping and updating location-based stuff
        setInterval(
            () => this.setState({ time: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds() }),
            1000
        );
    }
    state = {
        time: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds()
    }
    render() {
        return <Text style={styles.time}>{this.state.time}</Text>;
    }
}

class UpdateCountdown extends React.Component {
    componentDidMount() {
        // in the end we gon update every minute.
        // suits the time well, as well as a balanced time period
        // for snooping and updating location-based stuff
        setInterval(
            () => {
                this.setState({
                    message: "You have " + Math.ceil(Math.ceil(Math.abs(appointmentTime - Date.now())) / (1000 * 60 * 60)) + " minutes until your\nappointment at South Yarra Clinic"
                }); /*console.log(appointmentTime - Date.now() / (1000 * 60))*/
            },
            1000
        );
    }

    state = {
        // message: "You have " + Math.ceil(Math.ceil(Math.abs(Date.now() - appointmentTime)) / (1000 * 60 * 60)) + " minutes until your appointment at South Yarra Clinic"
        message: "potato"
    }
    render() {
        return <Text style={styles.appointmentMsg}>{this.state.message}</Text>;
    }
}

export default function Appointments() {
    Location.requestPermissionsAsync().then(() => console.log("we have location perms"));
    // DirectionUtil.getTravel().then((x) => console.log(x))
    return (
        <View style={styles.container}>
            <MapView style={styles.materialMapView}></MapView>
            <UpdateTime>time</UpdateTime>
            <UpdateCountdown>countdown</UpdateCountdown>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    materialMapView: {
        height: 193,
        width: 322,
        marginTop: 225,
        marginLeft: 27
    },
    time: {
        fontFamily: "Lato_700Bold",
        fontSize: 60,
        color: "#121212",
        height: 58,
        width: 200,
        marginTop: -400,
        marginLeft: 25
    },
    appointmentMsg: {
        fontFamily: "Lato_400Regular",
        color: "#121212",
        height: 36,
        width: 186,
        marginTop: 10,
        marginLeft: 25
    },
    mapStyle: {
        // position: "absolute",
        height: 193,
        marginTop: 225,
        marginLeft: 27,
        marginRight: 27,
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        // radi: Dimensions.get('window').width / 2
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});