import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { BookParamList } from '../types'

type Props = {
    navigation: StackNavigationProp<BookParamList, 'AvaliableClinics'>
}
export default function Book({navigation}){
    const handleClick = () => {
        navigation.navigate('AvaliableClinics')
    }
    
    return(
        <View>
            <Text>Book</Text>
            <Button onPress={handleClick} title="Avaliable Clinics"></Button>
        </View>
    )
}