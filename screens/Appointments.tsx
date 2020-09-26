import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
// import { Text, View } from '../components/Themed';
import * as DirectionUtil from '../components/MyDirectionAdapter'
import * as Location from 'expo-location';
import { Text, View } from 'react-native';
import { setLogLevel } from 'firebase';

var appointmentTime: number = Date.now();
appointmentTime = appointmentTime + (48 * (60 * 60 * 1000))

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
                    message: "You have " + Math.ceil(Math.ceil(Math.abs(appointmentTime - Date.now())) / (1000 * 60 * 60)) + " minutes until your\nappointment at South Yarra Clinic."
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

type departState = {
    counter: number,
    timeToLeave: number,
    timeToLeaveSecs: number,
    message: string
}

class UpdateDepartureTime extends React.Component {
    componentDidMount() {
        // in the end we gon update every minute.
        // suits the time well, as well as a balanced time period
        // for snooping and updating location-based stuff
        setInterval(
            () => {
                // console.log(this.state.counter)
                let newCounter = this.state.counter + 1
                let newTime: number = (this.state.counter % 60 == 0) ? this.state.timeToLeave - 1 : this.state.timeToLeave;
                let newSecs = (this.state.timeToLeaveSecs == 0) ? 59 : this.state.timeToLeaveSecs - 1
                this.setState(previousState => ({
                    counter: newCounter,
                    timeToLeave: newTime,
                    timeToLeaveSecs: newSecs,
                    message: "You should leave in " + newTime + " minutes and " + newSecs + " seconds to arrive on time."
                }))
            },
            1000
        );
    }
    state: departState = {
        counter: 0,
        timeToLeave: 27,
        timeToLeaveSecs: 59,
        message: "You should leave in 27 minutes and 59 seconds to arrive on time."
    }
    render() {
        return <Text style={styles.departure}>{this.state.message}</Text>;
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
    departure: {
        fontFamily: "Lato_400Regular",
        fontSize: 24,
        height: 56,
        width: 300,
        marginTop: 325,
        marginLeft: 25
    }
});