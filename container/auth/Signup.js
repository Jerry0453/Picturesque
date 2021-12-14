import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native'
import normalize from '../normalize'
import SelectDropdown from 'react-native-select-dropdown'


export default function Login({navigation}) {
    const roles = ["Guest", "Photographer"];
    return (
        <View>
            <ImageBackground 
                source={require('../Images/cropedbg2.jpg')}
                style={Styles.imagebg}></ImageBackground>

            <View style={{height:'100%', width:'100%', backgroundColor: 'rgba(0,0,0,0.3)', padding: normalize(25), justifyContent:'center'}}>
                <View style={{backgroundColor:'white', padding:normalize(20), marginTop: normalize(30)}}>
                    
                <Text style={Styles.logindesign}>Sign Up</Text>
                    <SelectDropdown
                        data={roles}
                        onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        }}
                        buttonStyle={Styles.inputdesign}
                            buttonTextStyle={{color: 'white', fontSize: 15, marginLeft: 5}}
                    />
               
                    <View style={Styles.inputdesign}>
                        <TextInput>Enter your FullName</TextInput>
                     </View>
                     <View style={Styles.inputdesign}>
                        <TextInput>Enter your Username</TextInput>
                    </View>
                    <View style={Styles.inputdesign}>
                        <TextInput>Enter your mail</TextInput>
                     </View>
                     <View style={Styles.inputdesign}>
                        <TextInput>Enter your Password</TextInput>
                     </View>
                    <View>
                        <TouchableOpacity style={Styles.buttondesign}>
                            <Text>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.newaccount}>
                        <Text style={Styles.signupdesign}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={Styles.signupdesign}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       
        </View>
    )
}
const Styles = StyleSheet.create({
    imagebg:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.35,
        position: 'absolute',
        //top: -Dimensions.get('window').height*0.45,
    },
    inputdesign:{
        backgroundColor: '#8891a8',
        width: '100%',
        marginTop: normalize(30),
        borderRadius: 15,
        paddingHorizontal: 10,
        overflow: 'hidden',
        
    },
    logindesign:{
        alignSelf:'flex-start',
        color:'#38486e',
        fontSize: normalize(28),
        fontWeight: 'bold',
    },
    buttondesign:{
        width: '100%',
        alignItems: "center",
        backgroundColor: '#38486e',
        padding: normalize(10),
        borderRadius: 10,
        marginTop: normalize(20),  
    },
    newaccount:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupdesign:{
        color:'black',
        marginTop: normalize(14),
        fontSize: normalize(13),
        textAlign: 'center',
        marginRight: normalize(10),
    }
})
