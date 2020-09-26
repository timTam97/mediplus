import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Agenda } from 'react-native-calendars';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

export default function Medication() {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
        const newItems = {};
        Object.keys(items).forEach(key => {
            newItems[key] = items[key];
        });
          setItems(newItems)
        }, 1000);
      }

    return(
        <SafeAreaView style={{flex: 1}}>
            <Text style={styles.title}>Medication</Text>
            <View style={styles.agenda}>
                <Agenda
                    items={items}
                    loadItemsForMonth={loadItems}
                    selected={'2017-05-16'}
                />
            </View>
            <View style={styles.containerDailyMeds}>
                <Image
                    source={require("../assets/dailymedstaken.png")}
                    resizeMode="contain"
                    style={styles.dailyMeds}
                ></Image>
            </View>
            <Text style={styles.month}>September</Text>
         </SafeAreaView>
         
    )
}

export const styles = StyleSheet.create({
    title: {
        fontFamily: "Lato_700Bold",
        color: "rgba(23,34,133,1)",
        fontSize: 35,
        marginTop: 30,
        marginLeft: 34
    },
    container: {
        flex: 1
    },
    month: { 
        fontFamily: "Lato_700Bold",
        color: "rgba(23,34,133,1)",
        fontSize: 17,
        top: -570,
        marginLeft: 34
    },
    dailyMeds: {
        top: -570,
        marginLeft: 34,
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    containerDailyMeds: {
        alignItems: 'center',
        top: 0,
        paddingHorizontal: 20,
        height: 60,
        left: 5
    },
    agenda: {
        flex: 1, 
        top: 120
    }
});
