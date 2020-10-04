import * as React from 'react';
import {StyleSheet, TouchableHighlight, Image} from 'react-native';
import MapView from 'react-native-maps';
import * as DirectionUtil from '../components/MyDirectionAdapter';
import {Text, View} from 'react-native';
import * as Linking from 'expo-linking';

import { API, graphqlOperation } from 'aws-amplify'
import { createClinic } from '../graphql/mutations'
import { listClinics } from '../graphql/queries'

const initialState = { name: '', description: '' }

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)


let appointmentTime: number = Date.now();
appointmentTime = appointmentTime + (48 * (60 * 60 * 1000));
const globalAny: any = global;

class UpdateTime extends React.Component {
  // not time anymore, more of a countdown
  componentDidMount() {
    this.state.intervalID = window.setInterval(
        () => {
          const newMins = (this.state.secs === 0) ? this.state.mins - 1 : this.state.mins;
          const newSecs = (this.state.secs !== 0) ? this.state.secs - 1 : 59;
          this.setState({
            mins: newMins,
            secs: newSecs,
            time: newMins + ':' + newSecs,
          });
        },
        1000,
    );
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }
  state = {
    intervalID: 0,
    mins: Math.round((appointmentTime - Date.now()) / ((60 * 60 * 1000))),
    secs: 0,
    time: '',
  }
  render() {
    return <Text style={styles.time}>{this.state.time}</Text>;
  }
}

class UpdateCountdown extends React.Component {
  componentDidMount() {
    this.state.intervalID = window.setInterval(
        () => {
          this.setState({
            mins: (this.state.counter % 60 === 0) ? this.state.mins - 1 : this.state.mins,
            counter: this.state.counter + 1,
            message: 'You have ' + this.state.mins + ' minutes until your\nappointment at South Yarra Clinic.\n' +
            'Tap the map to get directions to the clinic.',
          }); /* console.log(appointmentTime - Date.now() / (1000 * 60))*/
        },
        1000,
    );
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }
  state = {
    intervalID: 0,
    mins: Math.round((appointmentTime - Date.now()) / ((60 * 60 * 1000))),
    counter: 0,
    message: '',
  }
  render() {
    return <Text style={styles.appointmentMsg}>{this.state.message}</Text>;
  }
}

class UpdateDepartureTime extends React.Component {
  componentDidMount() {
    this.state.intervalID = window.setInterval(
        () => {
        // console.log(this.state.counter)
          if (typeof globalAny.distanceText === 'undefined' || typeof globalAny.timeVal === 'undefined') {
            this.setState(() => ({
              message: 'Waiting on location data...',
            }));
            return;
          } else if (!this.state.read) {
            this.setState(() => ({
              read: true,
              timeToLeaveMins: Math.floor(globalAny.timeVal / 60),
              timeToLeaveSecs: globalAny.timeVal % 60,
              message: 'Waiting on location data...',
            }));
          }
          const newMins = (this.state.timeToLeaveSecs == 59) ? this.state.timeToLeaveMins - 1 : this.state.timeToLeaveMins;
          const newSecs = (this.state.timeToLeaveSecs == 0) ? 59 : this.state.timeToLeaveSecs - 1;
          this.setState(() => ({
            timeToLeaveMins: newMins,
            timeToLeaveSecs: newSecs,
            message: 'You are ' + globalAny.distanceText + ' away from the clinic.' +
            '\nBased on your location, you should leave in ' + newMins
            + ' minutes and ' + newSecs + ' seconds to arrive on time.',
          }));
        },
        1000,
    );
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }
  state = {
    intervalID: 0,
    read: false,
    timeToLeaveMins: Math.floor(globalAny.timeVal / 60),
    timeToLeaveSecs: globalAny.timeVal % 60,
    message: 'Waiting on location data...',
  }
  render() {
    return <Text style={styles.departure}>{this.state.message}</Text>;
  }
}

const dest = {
  'city': 'South Yarra',
  'country': 'Australia',
  'district': null,
  'isoCountryCode': 'AU',
  'name': '670 Chapel',
  'postalCode': '3141',
  'region': 'VIC',
  'street': 'Malcolm Street',
  'subregion': 'Melbourne',
  'timezone': 'Australia/Melbourne',
};
const destAddress = dest.name + ' ' + dest.city + ' ' + dest.region + ' ' + dest.postalCode.replace(/ /g, '+');

export default function Appointments({navigation}: any) {
  const [formState, setFormState] = React.useState(initialState)
  const [clinics, setClinics] = React.useState([])

  React.useEffect(() => {
    fetchClinics()
  }, [])

  function setInput(key: any, value: any) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchClinics() {
    try {
      const clinicData = await API.graphql(graphqlOperation(listClinics))
      console.log(clinicData)
      const clinics = clinicData.data.listClinics.items
      setClinics(clinics)
    } catch (err) { console.log(err.errors[0]) }
  }

  async function addTodo() {
    try {
      const todo = { ...formState }
      setClinics([...clinics, clinic])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createClinic, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }
  // let a: LocationGeocodedLocation;
  // Location.geocodeAsync("South Yarra Clinic").then((x) => a = x[0])
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={DirectionUtil.clinicLocation}
        onPress={(() => Linking.openURL('comgooglemaps://?daddr=' + destAddress + '&directionsmode=driving'))}>
      </MapView>
      <UpdateTime></UpdateTime>
      <UpdateCountdown></UpdateCountdown>
      {/* <Text style={styles.departure}>potato</Text> */}
      <UpdateDepartureTime></UpdateDepartureTime>
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {
        console.log('TAP'); navigation.navigate('VirtualQueue');
      }}>
        <Image
          source={require('../assets/images/ArrivedButton.png')}
          resizeMode="contain"
          style={styles.image}>
        </Image>
      </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
  },
  image: {
    // scale factor: 5.59375
    marginTop: 30,
    marginBottom: 50,
    alignSelf: 'center',
  },
  mapStyle: {
    // position: "absolute",
    // alignContent: "center",
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 17,
    height: 300,
    width: 322,
    marginTop: 150,
    top: 30,
    marginLeft: 20,
    marginRight: 20,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // radi: Dimensions.get('window').width / 2
  },
  time: {
    fontFamily: 'Lato_700Bold',
    fontSize: 50,
    color: '#172285',
    height: 58,
    width: 200,
    marginTop: -415,
    marginLeft: 25,
  },
  appointmentMsg: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: '#121212',
    marginTop: 10,
    marginLeft: 25,
  },
  departure: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    marginTop: 350,
    marginLeft: 25,
  },
});
