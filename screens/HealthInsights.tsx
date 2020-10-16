import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, Linking, Platform} from 'react-native';

export default function HealthInsights() {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={{...styles.item, backgroundColor: '#D2E1FF'}}>
            <Image style={{height: '100%', width: '100%', borderRadius: 15}}
              source={require('../assets/images/Heartbeat.png')}
              resizeMode="contain">
            </Image>
          </View>
          <View style={styles.item}>
            <Image style={{height: '100%', width: '100%', borderRadius: 15}}
              source={require('../assets/images/Water.png')}
              resizeMode="contain">
            </Image>
          </View>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.item} onPress={() => {
            if (Platform.OS == "ios") {
              Linking.openURL("x-apple-health://")
            }
          }}>
            <Text style={styles.stepsStrText}>
              Weekly steps:
            </Text>
            <Text style={styles.stepsNumText}>
              {global.weeklySteps}
            </Text>
          </Pressable>
          <View style={{...styles.item, backgroundColor: '#D2E1FF'}}>
            <Image style={{height: '100%', width: '100%', borderRadius: 15}}
              source={require('../assets/images/Calories.png')}
              resizeMode="contain">
            </Image>
          </View>
        </View>
      </View>
      <View style={styles.sleepTrackerContainer}>
        <Image style={{height: '100%', width: '100%', borderRadius: 15}}
          source={require('../assets/images/combinedCharts.png')}
          resizeMode="contain">
        </Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'column',
  },
  table: {
    // flex: 1,
    // flexDirection: 'column',
    // height: "60%",
    // backgroundColor: "#FF0000",
    paddingTop: 10,
    height: 300,
  },
  row: {
    justifyContent: 'space-around',
    // backgroundColor: "#FF0000",
    flexDirection: 'row',
    height: 130,
    width: '100%',
    marginBottom: 20,
  },
  item: {
    width: 165,
    height: 130,
    borderRadius: 15,
    backgroundColor: '#6681FF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  stepsStrText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "Lato_400Regular_Italic",
    fontSize: 28
  },
  stepsNumText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "Lato_900Black",
    fontSize: 35
  },
  sleepTrackerContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 300,
    flexGrow: 1,
    shadowColor: '#e0e0ec',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 5,
    borderRadius: 15,
  },
});
