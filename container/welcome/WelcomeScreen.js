import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'
import normalize from '../../constants/normalize'

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            source={require('../Images/logo.jpg')}
            style={Styles.imagebg}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: normalize(70)}}>
                <TouchableOpacity style={Styles.buttondesign} onPress={() => navigation.navigate('Home')}>
                    <Text style={{color:'#fff', fontSize: normalize(15)}}>Guest</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttondesign} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color:'#fff', fontSize: normalize(15)}}>Photographer</Text>
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
        alignItems:'center',
        backgroundColor: "#38486E",
        padding: normalize(10),
        borderRadius: 10,
        marginBottom: normalize(15)
    },
    button2design:{
        width: '70%',
        alignItems:'center',
        backgroundColor: "#38486E",
        borderRadius: 10,
        padding: normalize(10),
    },
    
})
