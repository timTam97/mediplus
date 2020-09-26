import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as DirectionUtil from '../components/MyDirectionAdapter'
import {RootStackParamList} from '../types'
 
export default function TabOneScreen({props}) {


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes





export default function TabOneScreen() {
  console.log("hereeeee");
  // DirectionUtil.getTravel().then((x) => console.log(x))
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
      <MapView style={styles.mapStyle} region={DirectionUtil.clinicLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
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
