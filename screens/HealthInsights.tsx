import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'
import { TouchableRipple } from 'react-native-paper';


export default function HealthInsights(){
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.row}>
                </View>
                <View style={styles.row}>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 20, 
    },
    row: {
        alignContent: "space-around",
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        width: 165,
        height: 130,
        borderRadius: 10,
        backgroundColor: "#6681FF",
    }
    
})