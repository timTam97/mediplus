import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as DirectionUtil from '../components/MyDirectionAdapter'

// function hi() {
//   fetch("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=71+Argyle+Way+Wantirna+South&destinations=Garrisson+Drive+Glen+Waverley&key=AIzaSyBV9SwsndxAtlO5aKpUcetk3kTVQlX7pcA")
//     .then(response => response.json())
//     .then(data => console.log(data.rows[0].elements[0].distance.text + ", " + data.rows[0].elements[0].duration.text));

// }

export default function TabOneScreen() {

  console.log("hereeeee");
  DirectionUtil.getTravel().then((x) => console.log(x))
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
