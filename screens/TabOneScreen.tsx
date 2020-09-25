import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import distance from '../react-native-google-matrix/dist/index.mjs';

async function getLocGeocode(): Promise<Location.LocationGeocodedAddress[]> {
  let loc = null;
  try {
    loc = await getLoc();
  }
  catch {
    return Promise.reject();
  }
  return Location.reverseGeocodeAsync({ latitude: loc.coords.latitude, longitude: loc.coords.longitude })
    .then((x) => { console.log(x); return x })
}

async function getTravelTime(location: Location.LocationGeocodedAddress): Promise<string> {
  let distance = require('google-distance');
  var distance = require('path/to/google-distance/dist/index.common.js')
  let srcAddress = (await location).name + " " + (await location).city + " " + (await location).region + " " + (await location).postalCode;
  return Promise.resolve(srcAddress);
  // distance.get(
  //   { origin: }
  // )
  // return "get to work!!!!!"
}


async function getLoc(): Promise<Location.LocationObject> {
  let lastLocation = await Location.getLastKnownPositionAsync({ maxAge: 60000, requiredAccuracy: 10 });
  if (lastLocation != null) {
    return lastLocation;
  }
  return Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.BestForNavigation
  })
}
async function getTravel(): Promise<string> {
  return getLocGeocode()
    .then((x) => getTravelTime(x[0]));
}



export default function TabOneScreen() {
  console.log("hereeeee")
  getTravel().then((x) => console.log(x))
  // getLocGeocode();
  // getTravelTime((await getLocGeocode()))
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') { }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
