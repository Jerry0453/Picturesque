import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'
import normalize from '../normalize'
export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            source={require('../Images/logo.jpg')}
            style={Styles.imagebg}>
            <View>
            <TouchableOpacity style={Styles.buttondesign} onPress={() => navigation.navigate('Home')}>
            <Text style={{color:'#fff'}}>Guest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button2design} onPress={() => navigation.navigate('Login')}>
            <Text style={{color:'#fff'}}>Photographer</Text>
            </TouchableOpacity>
            </View>
        
        </ImageBackground>
    )
}
const Styles = StyleSheet.create({
    imagebg:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttondesign:{
        width: '70%',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: "#4c5a7d",
        padding: normalize(10),
        borderRadius: 10,
        marginTop: normalize(190),
    },
    button2design:{
        width: '70%',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: "#4c5a7d",
        borderRadius: 10,
        padding: normalize(10),
        marginTop: normalize(10),
    },
    
})
