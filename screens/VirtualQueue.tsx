import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';

export default function Explore() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerSectionStackStack}>
        <View style={styles.headerSectionStack}>
          <View style={styles.rect54}>
            <Text style={styles.virtualQueue}>Virtual Queue</Text>
            <Text style={styles.text74}>Thank you for waiting.</Text>
            <View style={styles.ellipseRow}>
              <Svg viewBox="0 0 8 8" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={0}
                  fill="rgba(151,159,235,1)"
                  cx={4}
                  cy={4}
                  rx={4}
                  ry={4}
                ></Ellipse>
              </Svg>
              <Svg viewBox="0 0 8 8" style={styles.ellipse1}>
                <Ellipse
                  strokeWidth={0}
                  fill="rgba(151,159,235,1)"
                  cx={4}
                  cy={4}
                  rx={4}
                  ry={4}
                ></Ellipse>
              </Svg>
              <Svg viewBox="0 0 8 8" style={styles.ellipse2}>
                <Ellipse
                  strokeWidth={0}
                  fill="rgba(151,159,235,1)"
                  cx={4}
                  cy={4}
                  rx={4}
                  ry={4}
                ></Ellipse>
              </Svg>
            </View>
            <Svg viewBox="0 0 214 214" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(102,129,255,1)"
                cx={107}
                cy={107}
                rx={107}
                ry={107}
              ></Ellipse>
            </Svg>
            <Text style={styles.text75}>
              Here is your position in the queue.
            </Text>
            <View style={styles.drKhanIsRunningRow}>
              <Text style={styles.drKhanIsRunning}>Dr. Khan is running</Text>
              <Text style={styles.drKhanIsRunning1}>20</Text>
              <Text style={styles.minutesLate}>minutes late.</Text>
            </View>
            <Text style={styles.text77}>
              We’ll let you know when we’re almost {'\n'}ready to see you.
            </Text>
          </View>
          <Text style={styles.virtualQueue1}>5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  headerSection: {
    top: 22,
    left: 0,
    height: 60,
    position: 'absolute',
    right: 86,
  },
  rect54: {
    top: 0,
    left: 0,
    width: 500,
    height: 740,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
  },
  virtualQueue: {
    fontFamily: 'Lato_700Bold',
    color: 'rgba(23,34,133,1)',
    fontSize: 35,
    marginTop: 112,
    marginLeft: 37,
  },
  text74: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    marginTop: 5,
    marginLeft: 39,
  },
  ellipse: {
    width: 8,
    height: 8,
  },
  ellipse1: {
    width: 8,
    height: 8,
    marginLeft: 14,
  },
  ellipse2: {
    width: 8,
    height: 8,
    marginLeft: 14,
  },
  ellipseRow: {
    height: 8,
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 45,
    marginRight: 263,
  },
  ellipse3: {
    width: 214,
    height: 214,
    marginTop: 48,
    marginLeft: 71,
  },
  text75: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    marginTop: 33,
    marginLeft: 37,
  },
  drKhanIsRunning: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
  },
  drKhanIsRunning1: {
    fontFamily: 'Lato_700Bold',
    color: 'rgba(102,129,255,1)',
    marginLeft: 5,
  },
  minutesLate: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    marginLeft: 4,
  },
  drKhanIsRunningRow: {
    height: 19,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 37,
    marginRight: 102,
  },
  text77: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    marginTop: 12,
    marginLeft: 37,
  },
  virtualQueue1: {
    top: 288,
    left: 148,
    position: 'absolute',
    fontFamily: 'Lato_700Bold',
    color: 'rgba(243,244,255,1)',
    fontSize: 100,
  },
  headerSectionStack: {
    top: 0,
    left: 0,
    height: 740,
    position: 'absolute',
    right: 0,
  },
  exploreTabs: {
    top: 88,
    left: 0,
    height: 48,
    backgroundColor: 'rgba(0,0,0,1)',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: 86,
    justifyContent: 'center',
  },
  rect2: {
    width: 158,
    alignSelf: 'stretch',
    borderColor: '#026bbd',
    borderWidth: 0,
    borderBottomWidth: 3,
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    fontFamily: 'ibm-plex-sans-regular',
    alignSelf: 'center',
  },
  rect3: {
    width: 163,
    alignSelf: 'stretch',
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    fontFamily: 'ibm-plex-sans-regular',
    marginTop: 14,
    alignSelf: 'center',
  },
  recentlyVisited: {
    top: 154,
    left: 22,
    color: '#808080',
    position: 'absolute',
    fontSize: 16,
  },
  scrollArea: {
    top: 188,
    width: 360,
    height: 143,
    backgroundColor: 'rgba(0,0,0,1)',
    position: 'absolute',
    left: 0,
  },
  scrollArea_contentContainerStyle: {
    width: 516,
    height: 143,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rect6: {
    width: 156,
    height: 128,
    marginLeft: 16,
    flexDirection: 'row',
  },
  rect5: {
    backgroundColor: 'rgba(100,85,85,0.14)',
    borderRadius: 10,
    width: 156,
  },
  image: {
    width: 156,
    height: 64,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text4: {
    color: 'rgba(255,255,255,1)',
    fontSize: 12,
    fontFamily: 'ibm-plex-sans-500',
    letterSpacing: 1,
    marginTop: 2,
    marginLeft: 58,
  },
  text7: {
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 8,
    marginLeft: 41,
  },
  rect7: {
    width: 156,
    height: 128,
    marginLeft: 16,
    flexDirection: 'row',
  },
  rect52: {
    backgroundColor: 'rgba(100,85,85,0.14)',
    borderRadius: 10,
    width: 156,
  },
  image2: {
    width: 156,
    height: 64,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text42: {
    color: 'rgba(255,255,255,1)',
    fontSize: 12,
    fontFamily: 'ibm-plex-sans-500',
    letterSpacing: 1,
    marginTop: 2,
    marginLeft: 40,
  },
  text72: {
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 7,
    marginLeft: 41,
  },
  rect8: {
    width: 156,
    height: 128,
    marginLeft: 16,
    flexDirection: 'row',
  },
  rect53: {
    backgroundColor: 'rgba(100,85,85,0.14)',
    borderRadius: 10,
    width: 156,
  },
  image3: {
    width: 156,
    height: 64,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text43: {
    color: 'rgba(255,255,255,1)',
    fontSize: 12,
    fontFamily: 'ibm-plex-sans-500',
    letterSpacing: 1,
    marginTop: 2,
    marginLeft: 58,
  },
  text73: {
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 10,
    marginLeft: 41,
  },
  footer: {
    left: 0,
    height: 50,
    position: 'absolute',
    right: 86,
    bottom: 0,
  },
  headerSectionStackStack: {
    height: 740,
    marginRight: -86,
    marginLeft: 36,
  },
});
