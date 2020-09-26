import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import { TouchableRipple } from 'react-native-paper';


export default function HealthInsights(){
    return(
        <View style={styles.container}>
            <View style={styles.table}>
                <View style={styles.row}>
                    <View style={styles.item}>

                    </View>
                    <View style={styles.item}>
                        <Text>2</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Text>3</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>4</Text>
                    </View>
                </View>
            </View>
            <View style={styles.sleepTrackerContainer}>
                <Image style={{height:"100%", width:"100%", borderRadius: 15}}
                source={require("../assets/images/combinedCharts.png")}
                resizeMode="contain">
                    </Image>
            </View>
        </View>
    )
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
        height: 300
    },
    row: {
        justifyContent: "space-around",
        // backgroundColor: "#FF0000",
        flexDirection: 'row',
        height: 130,
        width: "100%",
        marginBottom: 20,
    },
    item: {
        width: 165,
        height: 130,
        borderRadius: 10,
        backgroundColor: "#6681FF",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    sleepTrackerContainer: {
        alignSelf: "center",
        backgroundColor: "#FFF",
        width: "90%",
        marginBottom: 300,
        flexGrow: 1,
        shadowColor: '#e0e0ec',
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 30, 
        elevation: 5,
        borderRadius: 15,
    }
})