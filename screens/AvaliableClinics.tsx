import React from 'react'
import { View, Text } from 'react-native'

export default function AvaliableClinics({navigation, route}){
    let servicetype = null;
    if(route.params) {
        servicetype = route.params.service
    }
    return(
        <View>
            <Text>AvaliableClinics + what {servicetype}</Text>
        </View>
    )
}